function solution(s, v) {
  let temp = Array.from({ length: v }, () => 0);
  let answer = [];

  function dfs(n, l) {
    if (l === v) {
      answer.push(temp.slice());
      return;
    } else {
      for (let i = n; i < s; i++) {
        temp[l] = i + 1;

        dfs(i + 1, l + 1);
      }
    }
  }

  dfs(0, 0);

  return answer;
}
