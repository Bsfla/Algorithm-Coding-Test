function solution(arr) {
  const answer = arr;

  for (let i = 0; i < answer.length; i++) {
    const index = i;
    let temp = 0;

    for (let j = i + 1; j < answer.length; j++) {
      if (answer[index] > answer[j]) {
        temp = answer[index];
        answer[index] = answer[j];
        answer[j] = temp;
      }
    }
  }

  return answer;
}
