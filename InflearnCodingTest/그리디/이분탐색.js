function solution(N, target, array) {
  array.sort((a, b) => a - b);
  let mid = 0;
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid + 1;

    if (array[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}
