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

function solution(array, M) {
  let count = 100;

  function dfs(money, level) {
    if (money > M) {
      return;
    } else if (money === M) {
      count = Math.min(count, level);
      return;
    } else {
      for (let i = 0; i < array.length; i++) {
        dfs(array[i] + money, level + 1);
      }
    }
  }
  dfs(0, 0);

  return count;
}
