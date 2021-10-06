const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const stack = [];
    let cases = input[i];

    if (cases.length === 1 && cases[0] === ".") break;
    for (let j = 0; j < cases.length; j++) {
      if (cases[j] === "(") stack.push(cases[j]);
      else if (cases[j] === "[") stack.push(cases[j]);
      else if (cases[j] === ")") {
        if (stack[stack.length - 1] === "(") stack.pop();
        else stack.push(cases[j]);
      } else if (cases[j] === "]") {
        if (stack[stack.length - 1] === "[") stack.pop();
        else stack.push(cases[j]);
      }
    }

    if (stack.length === 0) result.push("yes");
    else result.push("no");
  }

  console.log(result.join("\n"));
});
