const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const result = [];

  console.log(input);

  const N = input[0];
  const K = input[1];

  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      result.push(i);
    }
  }

  console.log(result[K - 1] || 0);

  process.exit();
});
