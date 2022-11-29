function solution(arr) {
  const answer = arr;

  for (let i = 0; i < answer.length - 1; i++) {
    let count = 1;

    for (let j = 0; j < answer.length - count; j++) {
      let temp = 0;

      if (answer[j] > answer[j + 1]) {
        temp = answer[j];
        answer[j] = answer[j + 1];
        answer[j + 1] = temp;
      }
    }

    count += 1;
  }

  return answer;
}
