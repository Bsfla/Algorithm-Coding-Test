function solution(arr) {
  return arr.reduce((acc, curr) => lcm(acc, curr));
}

function gcd(minNum, maxNum) {
  return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}

function lcm(minNum, maxNum) {
  return (minNum * maxNum) / gcd(minNum, maxNum);
}
