function solution(array, M) {
  let answer = 0;

  function dfs(number, level) {
    if (level > M) {
      answer += 1;
      return;
    } else {
      for (let i = 0; i < array.length; i++) {
        if (array[i] !== number) {
          dfs(array[i], level + 1);
        }
      }
    }
  }

  dfs(0, 1);

  return answer;
}
