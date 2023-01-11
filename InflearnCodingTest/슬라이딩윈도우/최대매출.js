//투포인터 풀이
function solution(M, array) {
  const result = [];
  let count = 1;
  let sum = 0;
  let right = 0;

  for (let i = 0; i < array.length - 2; i++) {
    sum = array[i];
    right = i + 1;

    while (count < 3) {
      sum += array[right];
      right++;
      count++;
    }

    result.push(sum);
    count = 1;
  }

  return Math.max(...result);
}

//슬라이딩윈도우 풀이
function solution(M, array) {
  let sum = 0;
  let window = 0;
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (i >= M) sum -= array[window++];

    result = Math.max(result, sum);
  }

  return result;
}
