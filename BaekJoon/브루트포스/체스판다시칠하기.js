const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const whiteFirst = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackFirst = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function whiteFirstPaint(chess, y, x) {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (chess[i][j] !== whiteFirst[i][j]) count++;
    }
  }

  return count;
}

function blackFirstPaint(chess, y, x) {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (chess[i][j] !== blackFirst[i][j]) count++;
    }
  }

  return count;
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input.shift().split(" ").map(Number);
  const chess = input.splice(0);
  const minArr = [];

  for (let i = 0; i + 7 < N; i++) {
    for (let j = 0; j + 7 < M; j++) {
      minArr.push(whiteFirstPaint(chess, i, j));
      minArr.push(blackFirstPaint(chess, i, j));
    }
  }

  console.log(Math.min(...minArr));
  process.exit();
});
