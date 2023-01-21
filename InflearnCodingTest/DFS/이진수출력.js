function solution(N) {
  let answer = "";
  function dfs(N) {
    if (N === 0) {
      return;
    } else {
      dfs(parseInt(N / 2));
      answer += String(N % 2);
    }
  }
  dfs(N);
  return answer;
}
