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
  const stack = [];
  const sequences = input.map((el) => parseInt(el));
  let result = [];
  let count = 1;

  while (sequences.length !== 0) {
    if (sequences[0] === stack[stack.length - 1]) {
      sequences.shift();
      stack.pop();
      result.push("-");
    } else {
      stack.push(count);
      result.push("+");
      count += 1;
    }

    if (sequences[0] < stack[stack.length - 1]) {
      result = [];
      result.push("NO");
      break;
    }
  }

  console.log(result.join("\n"));
});
