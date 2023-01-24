function solution(array) {
  const total = array.reduce((acc, bcc) => acc + bcc);
  const end = array.length;
  let answer = "No";
  let flag = 0;

  function dfs(level, sum) {
    if (flag) return;
    if (level === end) {
      if (total - sum === sum) answer = "YES";
    } else {
      dfs(level + 1, sum + array[level]);
      dfs(level + 1, sum);
    }
  }

  dfs(0, 0);
  return answer;
}
