const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = " ";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const dial = {
    WXYZ: "9",
    TUV: "8",
    PQRS: "7",
    MNO: "6",
    JKL: "5",
    GHI: "4",
    DEF: "3",
    ABC: "2",
  };

  const dial1 = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
  let answer = 0;

  for (let i = 0; i < dial1.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (dial1[i].split("").includes(input[j])) answer += i + 3;
    }
  }

  console.log(answer);

  process.exit();
});
