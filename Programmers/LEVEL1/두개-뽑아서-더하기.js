function solution(numbers) {
  const result = [];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum = numbers[i] + numbers[j];
      if (!result.includes(sum)) result.push(sum);
    }
  }

  return result.sort((a, b) => {
    return a - b;
  });
}
