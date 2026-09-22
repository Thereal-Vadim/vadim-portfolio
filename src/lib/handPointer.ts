export type HandPointerState = {
  active: boolean;
  visible: boolean;
  x: number;
  y: number;
  pinched: boolean;
};

const state: HandPointerState = {
  active: false,
  visible: false,
  x: 0,
  y: 0,
  pinched: false,
};

export function getHandPointer() {
  return state;
}

export function setHandPointer(patch: Partial<HandPointerState>) {
  Object.assign(state, patch);
}

export function resetHandPointer() {
  state.active = false;
  state.visible = false;
  state.pinched = false;
}
