function solution(M) {
  let result = 0;

  function dfs(number, level) {
    if (level === 0) {
      result = number;
      return;
    } else {
      dfs(number * level, level - 1);
    }
  }
  dfs(M, M - 1);
  return result;
}

function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
}
