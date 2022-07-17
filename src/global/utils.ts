export function random(max: number): number;
export function random(min: number, max: number): number;
export function random(minOrMax: number, max?: number): number {
  if (max) {
    return Math.floor(Math.random() * (max - minOrMax)) + minOrMax;
  } else {
    return Math.floor(Math.random() * minOrMax);
  }
}