import { swap } from '../utils';

export const bubbleSortGenerator = function*(arr) {
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

export const selectionSortGenerator = function*(arr) {
  let isFinished = false;
  let unfinishedFirstIndex = 0;

  while (!isFinished) {
    isFinished = true;

    let smallestIndex = unfinishedFirstIndex;

    for (let i = unfinishedFirstIndex + 1; i < arr.length; ++i) {
      if (arr[i] <= arr[smallestIndex]) {
        smallestIndex = i;
      }
    }

    if (unfinishedFirstIndex !== smallestIndex) {
      swap(arr, unfinishedFirstIndex, smallestIndex);

      ++unfinishedFirstIndex;
      isFinished = false;

      yield arr;
    }
  }
};

const createAtomicFunction = generator => {
  return arr => {
    let result;

    for (result of generator(arr.slice())) {};

    return result || arr;
  }
};

export const bubbleSort = createAtomicFunction(bubbleSortGenerator);
export const selectionSort = createAtomicFunction(selectionSortGenerator);
