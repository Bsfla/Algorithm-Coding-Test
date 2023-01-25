function solution(n, a, b) {
  let count = 0;

  while (true) {
    count += 1;
    if (Math.abs(a - b) === 1 && Math.min(a, b) % 2 !== 0) return count;

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
}
