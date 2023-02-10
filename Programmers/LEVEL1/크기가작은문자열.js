function solution(t, p) {
  const length = p.length;
  const result = [];

  for (let i = 0; i < t.length - length + 1; i++) {
    result.push(t.slice(i, i + length));
  }

  return result.filter((el) => Number(el) <= Number(p)).length;
}
