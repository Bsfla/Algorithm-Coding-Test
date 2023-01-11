function solution(M, array) {
  let left = 0;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] <= M) count += 1;
    left = i + 1;
    sum = array[i];

    while (sum <= M) {
      sum += array[left];

      if (sum <= M) {
        left += 1;
        count += 1;
      }
    }
  }

  return count;
}

function lectureSolution(m, arr) {
  let result = 0;
  let sum = 0;
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum > m) {
      sum -= arr[left++];
    }
    result += i - left + 1;
  }
  return result;
}
