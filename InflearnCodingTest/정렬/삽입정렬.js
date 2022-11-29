function solution(arr) {
  const answer = arr;
  for (let i = 1; i < answer.length; i++) {
    let temp = 0;

    for (let j = i; j > -1; j--) {
      if (answer[j] < answer[j - 1]) {
        temp = answer[j - 1];
        answer[j - 1] = answer[j];
        answer[j] = temp;
      } else break;
    }
  }

  return answer;
}
