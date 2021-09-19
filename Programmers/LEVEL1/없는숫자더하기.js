function solution(numbers) {
  const findNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return findNumbers
    .filter((el) => !numbers.includes(el))
    .reduce((acc, bcc) => acc + bcc);
}
