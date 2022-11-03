const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = input.shift();

  input.forEach((el) => {
    const stack = [];

    el.split("").forEach((parenthesis) => {
      if (parenthesis === "(") stack.push(parenthesis);
      else {
        if (stack[stack.length - 1] === "(") stack.pop();
        else stack.push(parenthesis);
      }
    });
    if (stack.length) console.log("NO");
    else console.log("YES");
  });
});
