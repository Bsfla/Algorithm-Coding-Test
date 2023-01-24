function solution(maxNum, array) {
  let max = Number.MIN_SAFE_INTEGER;

  function dfs(level, sum) {
    if (sum > maxNum) return;
    if (level === array.length) {
      max = Math.max(sum, max);
    } else {
      dfs(level + 1, sum + array[level]);
      dfs(level + 1, sum);
    }
  }

  dfs(0, 0);
  return max;
}
