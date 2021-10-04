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

  for (let i = 0; i < inputWord.length; i++) {
    left.push(inputWord[i]);
  }

  for (let i = 1; i < parseInt(input[0]) + 1; i++) {
    if (input[i][0] === "L" && left.length) {
      right.push(left.pop());
      console.log(left);
    } else if (input[i][0] === "D" && right.length) {
      left.push(right.pop());
    } else if (input[i][0] === "B" && left.length) {
      left.pop();
    } else if (input[i][0] === "P") {
      left.push(input[i][2]);
    }
  }

  while (right.length) {
    left.push(right.pop());
  }

  console.log(left.join(""));
});
