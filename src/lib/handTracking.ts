const WASM_URL = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@1.0.1/wasm";
const MODEL_URL =
  "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";

export const THUMB_TIP = 4;
export const INDEX_TIP = 8;
export const WRIST = 0;
export const MIDDLE_MCP = 9;

const PINCH_ON = 0.34;
const PINCH_OFF = 0.56;
const EDGE = 0.1;

export type LandmarkPoint = {
  x: number;
  y: number;
  z?: number;
};

type HandLandmarker = {
  detectForVideo: (
    video: HTMLVideoElement,
    timestamp: number,
  ) => { landmarks: LandmarkPoint[][] };
};

type VisionModule = {
  FilesetResolver: {
    forVisionTasks: (path: string) => Promise<unknown>;
  };
  HandLandmarker: {
    createFromOptions: (
      fileset: unknown,
      options: Record<string, unknown>,
    ) => Promise<HandLandmarker>;
  };
};

let landmarkerPromise: Promise<HandLandmarker> | null = null;

export async function getHandLandmarker() {
  if (!landmarkerPromise) {
    landmarkerPromise = createHandLandmarker();
  }

  try {
    return await landmarkerPromise;
  } catch (error) {
    landmarkerPromise = null;
    throw error;
  }
}

async function createHandLandmarker() {
  const vision = (await import(
    /* webpackIgnore: true */ /* turbopackIgnore: true */ "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@1.0.1/vision_bundle.mjs"
  )) as VisionModule;
  const fileset = await vision.FilesetResolver.forVisionTasks(WASM_URL);
  const options = {
    baseOptions: {
      modelAssetPath: MODEL_URL,
      delegate: "GPU",
    },
    runningMode: "VIDEO",
    numHands: 1,
    minHandDetectionConfidence: 0.6,
    minHandPresenceConfidence: 0.6,
    minTrackingConfidence: 0.6,
  };

  try {
    return await vision.HandLandmarker.createFromOptions(fileset, options);
  } catch {
    return await vision.HandLandmarker.createFromOptions(fileset, {
      ...options,
      baseOptions: { ...options.baseOptions, delegate: "CPU" },
    });
  }
}

export function pinchRatio(landmarks: LandmarkPoint[]) {
  const thumb = landmarks[THUMB_TIP];
  const index = landmarks[INDEX_TIP];
  const wrist = landmarks[WRIST];
  const middle = landmarks[MIDDLE_MCP];

  if (!thumb || !index || !wrist || !middle) return 1;

  const pinch = Math.hypot(thumb.x - index.x, thumb.y - index.y);
  const span = Math.hypot(wrist.x - middle.x, wrist.y - middle.y) || 0.2;

  return pinch / span;
}

export function isPinched(ratio: number, currentlyPinched: boolean) {
  return currentlyPinched ? ratio < PINCH_OFF : ratio < PINCH_ON;
}

export function mapThumbToScreen(
  thumb: LandmarkPoint,
  width: number,
  height: number,
) {
  const nx = (1 - thumb.x - EDGE) / (1 - EDGE * 2);
  const ny = (thumb.y - EDGE) / (1 - EDGE * 2);

  return {
    x: Math.min(1, Math.max(0, nx)) * width,
    y: Math.min(1, Math.max(0, ny)) * height,
  };
}
