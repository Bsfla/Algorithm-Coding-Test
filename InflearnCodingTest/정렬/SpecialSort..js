function solution(arr) {
  const answer = arr;
  let temp = 0;

  for (let i = 1; i < answer.length; i++) {
    for (let j = i; j > -1; j--) {
      if (answer[j] < 0 && answer[j - 1] > -1) {
        temp = answer[j - 1];
        answer[j - 1] = answer[j];
        answer[j] = temp;
      } else break;
    }
  }

  return answer;
}
