const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const calculate = input.split("-").map((str) =>
    str
      .split("+")
      .map(Number)
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0)
  );
  let result = calculate[0];

  for (let i = 1; i < calculate.length; i++) {
    result -= calculate[i];
  }

  console.log(result);
  process.exit();
});
