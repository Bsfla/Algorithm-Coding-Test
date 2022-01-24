function solution(arr) {
  const answer = arr.filter((el) => el !== Math.min(...arr));
  return answer.length ? answer : [-1];
}
