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
  let result = '';

  for (let i = 0; i < N; i++) {
    const stack = [];
    result = "YES";

    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "(") stack.push('(');
      else {
        if (stack.length) stack.pop();
        else {
          result = "NO";
          break;
        }
      }
    }
    if (stack.length) result = "NO";

    console.log(result);
  }
});