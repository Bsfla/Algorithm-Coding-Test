const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const number = input.filter((el) => el % 2 !== 0);
  const total = number.reduce((acc, bcc) => Number(acc) + Number(bcc));
  const min = Math.mi
});
