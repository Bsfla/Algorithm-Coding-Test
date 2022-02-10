const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = " ";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const dial = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
  let answer = 0;

  for (let i = 0; i < dial.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (dial[i].split("").includes(input[j])) answer += i + 3;
    }
  }

  console.log(answer);

  process.exit();
});
