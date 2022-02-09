const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = " ";

rl.on("line", function (line) {
  input = String(line);
}).on("close", function () {
  const answer = [];
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alpha.length; i++) {
    answer.push(input.indexOf(alpha[i]));
  }

  console.log(answer.join(" "));
});
