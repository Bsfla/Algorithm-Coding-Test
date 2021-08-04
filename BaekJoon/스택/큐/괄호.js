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

  let cases = '';
  let result = '';

  for (let i = 0; i < N; i++) {
     const stack = [];
     cases = input[i];
     result = "YES";

    for (let j = 0; j < cases.length; j++) {
      if (cases[j] === "(") stack.push(1);
      else {
        if (stack.length) stack.pop();
        else {
          result = "NO";
          break;
        }
      }
    }
    if (stack.length !== 0) result = "NO";

    console.log(result);
  }
});