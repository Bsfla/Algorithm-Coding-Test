function solution(s, v, m) {
  let temp = Array(v).fill(0);
  let answer = [];
  let total = 0;
  let count = 0;

  function dfs(n, l) {
    if (l === v) {
      answer = temp.slice();
      total = answer.reduce((acc, bcc) => acc + bcc);
      if (total % m === 0) count += 1;

      return;
    } else {
      for (let i = n; i < s.length; i++) {
        temp[l] = i + 1;
        dfs(i + 1, l + 1);
      }
    }
  }

  dfs(0, 0);

  return count;
}
