import { swap } from '../utils';

export const bubbleSortIterable = function*(arr) {
  let isFinished = false;

  while (!isFinished) {
    isFinished = true;

    for (let a = 0, b = 1; b < arr.length; ++a, ++b) {
      if (arr[a] > arr[b]) {
        swap(arr, a, b);

        isFinished = false;

        yield arr;
      }
    }
  }
};

export const bubbleSort = arr => {
  let result;

  for (result of bubbleSortIterable(arr.slice())) {};

  return result || arr;
};
