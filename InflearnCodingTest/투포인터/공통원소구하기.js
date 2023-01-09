function solution(array1, array2) {
  const [N, M] = [array1.length, array2.length];
  const answer = [];

  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;

  while (p1 < N && p2 < M) {
    if (array1[p1] === array2[p2]) {
      answer.push(array1[p1]);
      p1 += 1;
      p2 += 1;
    } else {
      if (array1[p1] > array2[p2]) p2 += 1;
      else p1 += 1;
    }
  }

  return answer;
}
