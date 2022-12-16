function solution(n, m) {
  return [greatestCommonDivisor(n, m), leastCommonMultiple(n, m)];
}

function greatestCommonDivisor(minNum, maxNum) {
  return minNum % maxNum === 0
    ? maxNum
    : greatestCommonDivisor(maxNum, minNum % maxNum);
}

function leastCommonMultiple(minNum, maxNum) {
  return (minNum * maxNum) / greatestCommonDivisor(minNum, maxNum);
}
