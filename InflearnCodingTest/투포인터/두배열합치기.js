function solution(array1, array2) {
  const N = array1.length;
  const M = array2.length;
  const answer = [];
  let [p1, p2] = [0, 0];

  while (p1 < N && p2 < M) {
    if (array1[p1] < array2[p2]) {
      answer.push(array1[p1]);
      p1 += 1;
    } else {
      answer.push(array2[p2]);
      p2 += 1;
    }
  }

  while (p1 < N) {
    answer.push(array[p1]);
    p1 += 1;
  }

  while (p2 < M) {
    answer.push(array2[p2]);
    p2 += 1;
  }

  return answer;
}
