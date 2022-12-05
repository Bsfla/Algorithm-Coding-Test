function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, curr, index) => {
    return (acc += curr * B[index]);
  }, 0);
}
