function solution(limitTime, array) {
  let max = Number.MIN_SAFE_INTEGER;
  let time = 0;

  function dfs(level, sum, time) {
    if (time > limitTime) return;
    if (level === array.length) {
      max = Math.max(max, sum);
    } else {
      dfs(level + 1, sum + array[level][0], time + array[level][1]);
      dfs(level + 1, sum, time);
    }
  }

  dfs(0, 0, 0);

  return max;
}
