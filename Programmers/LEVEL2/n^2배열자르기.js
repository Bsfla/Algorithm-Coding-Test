function solution(n, left, right) {
  const result = [];

  while (left <= right) {
    let x = Math.floor(left / n);
    let y = left % n;

    result.push(Math.max(x, y) + 1);
    left++;
  }

  return result;
}
