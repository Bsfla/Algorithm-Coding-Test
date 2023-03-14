function solution(board) {
  let count = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === 6 && y === 6) {
      count += 1;
      return;
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] !== 1) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  DFS(0, 0);
  return count;
}
