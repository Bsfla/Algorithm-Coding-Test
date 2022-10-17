const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const blackFirstBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const whiteFirstBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const whiteFirstBoardCheck = (y, x, board) => {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (whiteFirstBoard[i - y][j - x] !== board[i][j]) {
        count += 1;
      }
    }
  }
  return count;
};

const blackFirstBoardCheck = (y, x, board) => {
  let count = 0;
  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (blackFirstBoard[i - y][j - x] !== board[i][j]) {
        count += 1;
      }
    }
  }

  return count;
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input.shift().split(" ").map(Number);
  const board = input.splice(0);
  const result = [];

  for (let i = 0; i + 7 < N; i++) {
    for (let j = 0; j + 7 < M; j++) {
      result.push(whiteFirstBoardCheck(i, j, board));
      result.push(blackFirstBoardCheck(i, j, board));
    }
  }

  console.log(Math.min(...result));
  process.exit();
});
