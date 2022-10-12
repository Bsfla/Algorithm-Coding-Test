const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = " ";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const dials = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
  };
  const dialWords = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
  const words = input.split("");

  const results = words.reduce((acc, curr) => {
    dialWords.forEach((dialWord) => {
      if (dialWord.split("").includes(curr)) acc += dials[dialWord];
    });
    return acc;
  }, 0);

  console.log(results);

  process.exit();
});
