const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const leftStack = input.shift().split("");
  const rightStack = [];
  const N = input.shift();

  input.forEach((el) => {
    if (el[0] === "P") {
      leftStack.push(el[2]);
    } else if (el[0] === "L" && leftStack.length) {
      rightStack.push(leftStack.pop());
    } else if (el[0] === "D" && rightStack.length) {
      leftStack.push(rightStack.pop());
    } else if (el[0] === "B" && leftStack.length) {
      leftStack.pop();
    }
  });

  console.log(leftStack.join("") + rightStack.reverse().join(""));
});
