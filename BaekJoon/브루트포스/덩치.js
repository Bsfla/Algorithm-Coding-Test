const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input.shift());
  const students = input.map((el) => {
    return el.split(" ");
  });
  const rankList = [];
  let rank = 1;

  for (let i = 0; i < N; i++) {
    rank = 1;
    for (let j = 0; j < N; j++) {
      if (j != i) {
        if (students[i][0] < students[j][0] && students[i][1] < students[j][1])
          rank += 1;
      }
    }
    rankList.push(rank);
  }
  console.log(rankList.join(" "));
});
