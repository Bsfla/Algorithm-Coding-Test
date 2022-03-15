const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const left = [];
  const right = [];
  const inputWord = input.shift();
  const N = parseInt(input.shift());

  for (let i = 0; i < inputWord.length; i++) {
    left.push(inputWord[i]);
  }

  for (let i = 0; i < N; i++) {
    if (input[i][0] === 'L' && left.length) {
      right.push(left.pop());
    } else if (input[i][0] === 'D' && right.length) {
      left.push(right.pop());
    } else if (input[i][0] === 'P') left.push(input[i][2]);
    else if (input[i][0] === 'B' && left.length) left.pop();
  }

  while (right.length) {
    left.push(right.pop());
  }

  console.log(left.join(""));
});
