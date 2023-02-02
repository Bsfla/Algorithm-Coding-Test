function solution(array, M) {
  let answer = Number.MAX_SAFE_INTEGER;
  let N = array.length;

  function dfs(level, sum) {
    if (sum > M) return;
    if (level > answer) return;

    if (sum === M) {
      answer = Math.min(answer, level);
    } else {
      for (let i = 0; i < N; i++) {
        dfs(level + 1, sum + array[i]);
      }
    }
  }

  dfs(0, 0);

  return answer;
}
