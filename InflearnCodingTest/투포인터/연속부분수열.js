function solution(M, array) {
  let [left, right] = [0, 1];
  let sum = array[left];
  let count = 0;

  while (right <= array.length) {
    if (sum < M) {
      sum += array[right];
      right++;
    } else if (sum > M) {
      sum -= array[left];
      left++;
    } else {
      sum -= array[left];
      left++;
      count++;
    }
  }

  return count;
}

function lectureSolution(m, arr) {
  let result = 0;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === m) result++;
    while (sum >= m) {
      sum -= arr[left++];
      if (sum === m) {
        result++;
      }
    }
  }
  return result;
}
