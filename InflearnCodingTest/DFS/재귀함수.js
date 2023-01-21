function solution(N) {
  function dfs(N) {
    if (N === 0) return;
    else {
      dfs(N - 1);
      console.log(N);
    }
  }
  dfs(N);
}
