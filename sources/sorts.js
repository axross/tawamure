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

const createAtomicFunction = generator => {
  return arr => {
    let result;

    for (result of generator(arr.slice())) {};

    return result || arr;
  }
};

export const bubbleSort = createAtomicFunction(bubbleSortGenerator);
