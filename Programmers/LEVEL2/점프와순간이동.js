function solution(n) {
  let battery = 0;

  while (n !== 0) {
    if (n % 2 !== 0) {
      battery += 1;
      n -= 1;
    } else n /= 2;

    if (n === 0) return battery;
  }
}
