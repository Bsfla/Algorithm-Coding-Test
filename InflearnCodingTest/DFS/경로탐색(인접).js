function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n), () => Array(n).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  function dfs(v) {
    if (v === n) {
      answer++;
      return;
    } else {
      for (let i = 1; i < n + 1; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          dfs(i);
          ch[i] = 0;
        }
      }
    }
  }

  ch[1] = 1;
  dfs(1);

  return answer;
}
