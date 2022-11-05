function stringToInt(text: string): number | undefined;
function stringToInt(text: string, init: number): number;
function stringToInt(text: string, init?: number) {
  const num = parseInt(text);
  return isNaN(num) ? init : num;
}
export const numberInputToInt = (target: EventTarget & HTMLInputElement, init: number) => {
  const min = stringToInt(target.min);
  const max = stringToInt(target.max);
  const int = stringToInt(target.value, init);
  return min === undefined ? (max === undefined ? int : Math.min(int, max)) : max === undefined ? Math.max(int, min) : Math.max(min, Math.min(max, int));
};

export const range = (start: number, end: number) => Array.from({ length: end - start }, (_, i) => start + i);
