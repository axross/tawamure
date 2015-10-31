export const swap = (arr, indexOfA, indexOfB) => {
  const tmp = arr[indexOfA];

  arr[indexOfA] = arr[indexOfB];
  arr[indexOfB] = tmp;
};
