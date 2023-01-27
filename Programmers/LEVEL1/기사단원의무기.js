function findDivisorCount(number) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      count += 1;
      if (number / i != i) count += 1;
    }
  }

  return count;
}

function solution(number, limit, power) {
  const result = [];

  for (let i = 1; i < number + 1; i++) {
    let divisorCount = findDivisorCount(i);

    if (divisorCount > limit) divisorCount = power;

    result.push(divisorCount);
  }

  return result.reduce((acc, curr) => acc + curr);
}
