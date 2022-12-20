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
  return min === undefined
    ? max === undefined
      ? int
      : Math.min(int, max)
    : max === undefined
    ? Math.max(int, min)
    : Math.max(min, Math.min(max, int));
};

interface RangeFunction {
  (start: number, end: number): number[];
  (start: number, end: number, length: number): number[];
}
/**
 * Create an array of numbers includes `start` and `end`.
 * If a sequence from `start` to `end` is longer than `length`, it would be limited by `length`.
 * If a sequence from `start` to `end` is shorter than `length`, it would be limited by `end`.
 * @param start - The start number of the sequence
 * @param end - The end number of the sequence
 * @param length - Limit length of the sequence
 * @returns A sequence of numbers from start to end
 */
const range: RangeFunction = (start: number, end: number, length?: number) =>
  end > start && (length === undefined || length > 0)
    ? Array.from(
        { length: length === undefined ? end - start + 1 : Math.min(length, end - start + 1) },
        (_, i) => start + i
      )
    : [];

export const getPaginationNumbers = (currentPage: number, lastPage: number, paginationLength: number) => {
  if (lastPage <= paginationLength)
    return {
      paginationNumbers: range(1, lastPage),
      hasPreviousButton: false,
      hasNextButton: false,
    };

  const gap = Math.floor(paginationLength / 2);
  let start = currentPage - gap;
  let end = currentPage + gap;

  if (currentPage < gap + 1) {
    start = 1;
    end = paginationLength;
  } else if (currentPage > lastPage - gap) {
    start = lastPage - paginationLength + 1;
    end = lastPage;
  }

  return {
    paginationNumbers: range(start, end),
    hasPriviousButton: start > 1,
    hasNextButton: end < lastPage,
  };
};
