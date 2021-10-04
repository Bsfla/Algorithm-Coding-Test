const readline = require("readline"),
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let N = parseInt(input.shift());
  let M = [];
  let stack = [];
  let result = [];

  for (let i = 0; i < input.length; i++) {
    M[i] = input[i].split(" ");
  }

  for (let i = 0; i < N; i++) {
    if (M[i][0] === "push") stack.push(M[i][1]);
    else if (M[i][0] === "top") {
      stack.length ? result.push(stack[stack.length - 1]) : result.push(-1);
    } else if (M[i][0] === "pop") {
      stack.length ? result.push(stack.pop()) : result.push(-1);
    } else if (M[i][0] === "size") {
      result.push(stack.length);
    } else if (M[i][0] === "empty") {
      !stack.length ? result.push(1) : result.push(0);
    }
  }

  console.log(result.join("\n"));
});
