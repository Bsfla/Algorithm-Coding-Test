function solution(k, dungeons) {
  const visited = Array.from({ length: dungeons.length }, () => false);
  let answer = 0;

  function dfs(hp, level) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && hp - dungeons[i][0] >= 0) {
        visited[i] = true;
        dfs(hp - dungeons[i][1], level + 1);
        visited[i] = false;
      }

      return;
    }

    answer = Math.max(answer, level);
  }

  dfs(k, 0);

  return answer;
}
