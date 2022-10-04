function solution(answers) {
  const numberOne = [1, 2, 3, 4, 5];
  const numberTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  const numberThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [0, 0, 0];
  const answer = [];

  let max = 0;

  for (let i = 0; i < answers.length; i++) {
    if (numberOne[i % 5] === answers[i]) result[0] += 1;
    if (numberTwo[i % 8] === answers[i]) result[1] += 1;
    if (numberThree[i % 10] === answers[i]) result[2] += 1;
  }

  max = Math.max(...result);
  result.forEach((el, idx) => {
    if (el === max) {
      answer.push(idx + 1);
    }
  });

  return answer;
}

function solution(answers) {
  const numberOne = [1, 2, 3, 4, 5];
  const numberTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  const numberThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let result = [];
  let counts = [0, 0, 0];
  let max = 0;

  for (let i = 0; i < answers.length; i++) {
    if (numberOne[i % 5] === answers[i]) counts[0] += 1;
    if (numberTwo[i % 8] === answers[i]) counts[1] += 1;
    if (numberThree[i % 10] === answers[i]) counts[2] += 1;
  }

  max = Math.max(...counts);

  counts.forEach((el, idx) => {
    if (el === max) result.push(idx + 1);
  });
  return result;
}
