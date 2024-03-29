function solution(n, board) {
  let count = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function dfs(x, y) {
    for (let i = 0; i < n + 1; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 1) {
        board[nx][ny] = 0;
        dfs(nx, ny);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 0) {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}
