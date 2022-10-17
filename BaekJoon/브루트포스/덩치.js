const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = Number(input.shift());
  const bulks = input.map((el) => el.split(" ").map(Number));
  const rankList = [];
  let rank = 1;

  for (let i = 0; i < N; i++) {
    rank = 1;
    for (let j = 0; j < N; j++) {
      if (i == j) continue;
      if (bulks[i][0] < bulks[j][0] && bulks[i][1] < bulks[j][1]) rank += 1;
    }
    rankList.push(rank);
  }

  console.log(rankList.join(" "));
});
