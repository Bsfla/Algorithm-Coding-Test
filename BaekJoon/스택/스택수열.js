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
  const sequence = input.map(Number);

  const numbers = Array(N)
    .fill()
    .map((_, index) => index + 1);
});
