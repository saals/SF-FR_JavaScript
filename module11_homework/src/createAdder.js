export function createAdder(a) {
  return function addA(b) {
    return b + a
  }
}
