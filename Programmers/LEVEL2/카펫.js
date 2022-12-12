function solution(brown, yellow) {
  const result = [];
  let length = 0;

  for (let i = 1; i < yellow + 1; i++) {
    if (yellow % i === 0) {
      length = parseInt(yellow / i);
      if ((i + 2) * (length + 2) - i * length === brown) {
        result.push(length + 2);
        result.push(i + 2);
        return result;
      }
    }
  }
}

function solution(brown, yellow) {
  const wholeBlock = brown + yellow;

  for (let i = 1; i < yellow + 1; i++) {
    if (yellow % i === 0) {
      const length = yellow / i;

      if ((length + 2) * (i + 2) === wholeBlock) return [length + 2, i + 2];
    }
  }
}
