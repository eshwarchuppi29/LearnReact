export function Increment(counterValue = 1) {
  return { type: "INC", payload: counterValue };
}

export function Decrement(counterValue = 1) {
  return { type: "DEC", payload: counterValue };
}
