"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getLenis } from "@/lib/lenisStore";
import { resetHandPointer, setHandPointer } from "@/lib/handPointer";
import {
  INDEX_TIP,
  THUMB_TIP,
  getHandLandmarker,
  isPinched,
  mapThumbToScreen,
  pinchRatio,
} from "@/lib/handTracking";

const CLICK_MAX_MS = 420;
const CLICK_MAX_MOVE = 36;
const SCROLL_START_MOVE = 22;
const SCROLL_GAIN = 1.05;
const POINTER_TAU_MS = 190;
const SCROLL_TAU_MS = 110;

function damp(current: number, target: number, dt: number, tau: number) {
  return current + (target - current) * (1 - Math.exp(-dt / tau));
}

function isExternalAnchor(anchor: HTMLAnchorElement) {
  if (anchor.target === "_blank") return true;

  const href = anchor.getAttribute("href") || "";
  if (!href || href.startsWith("/") || href.startsWith("#") || href.startsWith("?")) {
    return false;
  }
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;

  try {
    return new URL(href, window.location.href).origin !== window.location.origin;
  } catch {
    return false;
  }
}

function clickAt(x: number, y: number) {
  const node = document.elementFromPoint(x, y);
  if (!(node instanceof Element)) return;

  const target = node.closest<HTMLElement>(
    "a, button, [role='button'], input, textarea, select, label, summary",
  );
  if (!target || target.getAttribute("aria-disabled") === "true") return;

  if (target instanceof HTMLAnchorElement && isExternalAnchor(target)) return;

  target.click();
}

export function HandMode() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);
  const frameTimeRef = useRef(0);
  const smoothRef = useRef({ x: 0, y: 0, ready: false });
  const pinchRef = useRef({
    active: false,
    startedAt: 0,
    startX: 0,
    startY: 0,
    lastY: 0,
    scrollVel: 0,
    scrolling: false,
  });

  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const [hint, setHint] = useState("");
  const hintRef = useRef("");

  const showHint = useCallback((next: string) => {
    if (hintRef.current === next) return;
    hintRef.current = next;
    setHint(next);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stopCamera = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
    lastTsRef.current = 0;
    frameTimeRef.current = 0;
    smoothRef.current.ready = false;
    pinchRef.current.active = false;
    pinchRef.current.scrolling = false;
    pinchRef.current.scrollVel = 0;
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    resetHandPointer();
    hintRef.current = "";
    setHint("");
  }, []);

  const startTracking = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    setBusy(true);
    setError(null);
    showHint("allow camera access");

    try {
      const landmarker = await getHandLandmarker();
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
          width: { ideal: 640 },
          height: { ideal: 480 },
        },
      });

      streamRef.current = stream;
      video.srcObject = stream;
      await video.play();

      setHandPointer({ active: true, visible: false });
      showHint("show thumb and index");
      setBusy(false);

      const loop = () => {
        rafRef.current = requestAnimationFrame(loop);
        if (video.readyState < 2 || video.videoWidth < 2) return;

        const now = performance.now();
        const dt = frameTimeRef.current ? Math.min(48, now - frameTimeRef.current) : 16.7;
        frameTimeRef.current = now;
        const timestamp = now <= lastTsRef.current ? lastTsRef.current + 1 : now;
        lastTsRef.current = timestamp;

        const result = landmarker.detectForVideo(video, timestamp);
        const landmarks = result.landmarks[0];
        const thumb = landmarks?.[THUMB_TIP];
        const index = landmarks?.[INDEX_TIP];

        if (!landmarks || !thumb || !index) {
          setHandPointer({ visible: false, pinched: false });
          pinchRef.current.active = false;
          pinchRef.current.scrolling = false;
          pinchRef.current.scrollVel = 0;
          showHint("show thumb and index");
          return;
        }

        const mapped = mapThumbToScreen(thumb, window.innerWidth, window.innerHeight);
        const smooth = smoothRef.current;

        if (!smooth.ready) {
          smooth.x = mapped.x;
          smooth.y = mapped.y;
          smooth.ready = true;
        } else {
          smooth.x = damp(smooth.x, mapped.x, dt, POINTER_TAU_MS);
          smooth.y = damp(smooth.y, mapped.y, dt, POINTER_TAU_MS);
        }

        const pinched = isPinched(pinchRatio(landmarks), pinchRef.current.active);
        const pinch = pinchRef.current;

        if (pinched && !pinch.active) {
          pinch.active = true;
          pinch.startedAt = now;
          pinch.startX = smooth.x;
          pinch.startY = smooth.y;
          pinch.lastY = smooth.y;
          pinch.scrollVel = 0;
          pinch.scrolling = false;
        } else if (pinched && pinch.active) {
          const travel = Math.hypot(smooth.x - pinch.startX, smooth.y - pinch.startY);
          if (!pinch.scrolling && travel > SCROLL_START_MOVE) {
            pinch.scrolling = true;
          }
          if (pinch.scrolling) {
            const dy = smooth.y - pinch.lastY;
            pinch.scrollVel = damp(pinch.scrollVel, dy * SCROLL_GAIN, dt, SCROLL_TAU_MS);
            const lenis = getLenis();
            if (lenis) {
              lenis.scrollTo(lenis.scroll - pinch.scrollVel, { immediate: true });
            } else {
              window.scrollBy(0, -pinch.scrollVel);
            }
          }
          pinch.lastY = smooth.y;
        } else if (!pinched && pinch.active) {
          const elapsed = now - pinch.startedAt;
          const travel = Math.hypot(smooth.x - pinch.startX, smooth.y - pinch.startY);
          if (!pinch.scrolling && elapsed < CLICK_MAX_MS && travel < CLICK_MAX_MOVE) {
            clickAt(smooth.x, smooth.y);
          }
          pinch.active = false;
          pinch.scrolling = false;
          pinch.scrollVel = 0;
        }

        setHandPointer({
          active: true,
          visible: true,
          x: smooth.x,
          y: smooth.y,
          pinched,
        });
        showHint("");
      };

      rafRef.current = requestAnimationFrame(loop);
    } catch (caught) {
      stopCamera();
      setBusy(false);
      setEnabled(false);

      const denied =
        caught instanceof DOMException &&
        (caught.name === "NotAllowedError" || caught.name === "PermissionDeniedError");
      setError(
        denied
          ? "camera access is needed for hand mode"
          : "hand mode could not start",
      );
    }
  }, [showHint, stopCamera]);

  useEffect(() => {
    if (!enabled) {
      stopCamera();
      return;
    }

    void startTracking();
    return () => stopCamera();
  }, [enabled, startTracking, stopCamera]);

  useEffect(() => {
    if (!error) return;
    const timer = window.setTimeout(() => setError(null), 4200);
    return () => window.clearTimeout(timer);
  }, [error]);

  const label = busy ? "hand: …" : enabled ? "hand: on" : "hand: off";

  if (!mounted) return null;

  return createPortal(
    <>
      <video
        ref={videoRef}
        className="hand-mode-video"
        muted
        playsInline
        autoPlay
      />
      <div className="hand-mode-dock">
        <button
          type="button"
          className="hand-mode-toggle"
          data-hover="no-cursor"
          aria-pressed={enabled}
          aria-label={enabled ? "Turn hand mode off" : "Turn hand mode on"}
          onClick={() => setEnabled((value) => !value)}
        >
          ({label})
        </button>
        <button
          type="button"
          className="hand-mode-toggle"
          data-hover="no-cursor"
          aria-expanded={helpOpen}
          onClick={() => setHelpOpen((value) => !value)}
        >
          (how)
        </button>
        {hint ? <p className="hand-mode-hint">{hint}</p> : null}
        {error ? <p className="hand-mode-hint">{error}</p> : null}
      </div>
      {helpOpen ? (
        <div className="hand-mode-help theme-light" role="dialog" aria-label="How to use hand mode">
          <p className="hand-mode-help-kicker">Hand Mode</p>
          <p>
            The site can be operated with Hand Mode or pointer / touch. A PC is
            the recommended setup. Switch from the control in the bottom-left
            corner.
          </p>
          <p>
            Turning Hand Mode on asks for camera access. Choose Allow. Only
            finger positions are read. No image or video is saved or sent. All
            detection stays on this device.
          </p>
          <p>
            Tracking uses two fingers: thumb and index. If those are not seen,
            hand control will not work. Keep a closed hand with the thumb and
            index opened, around face level and a little away from the camera.
          </p>
          <ul>
            <li>
              <strong>Pointer</strong> - the thumb is the pointer.
            </li>
            <li>
              <strong>Click</strong> - pinch index toward thumb, then release.
            </li>
            <li>
              <strong>Scroll</strong> - keep the pinch and move your hand, then
              release to stop.
            </li>
          </ul>
          <p>
            External links cannot be opened in Hand Mode - click or tap those
            with a pointer instead.
          </p>
          <button
            type="button"
            className="hand-mode-help-close"
            data-hover="no-cursor"
            onClick={() => setHelpOpen(false)}
          >
            (close)
          </button>
        </div>
      ) : null}
    </>,
    document.body,
  );
}
