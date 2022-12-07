function solution(n) {
  let sum = 0;
  let count = 0;

  for (let i = 1; i < n + 1; i++) {
    if (parseInt(n / 2) < i) return count + 1;

    for (let j = i; j < n + 1; j++) {
      sum += j;

      if (sum === n) {
        count += 1;
        break;
      } else if (sum > n) break;
    }
    sum = 0;
  }
}
