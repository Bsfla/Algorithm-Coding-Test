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
  const nums = input.map(Number);
  const stack = [];

  for (let i = 0; i < N; i++) {
    if (nums[i] === 0) stack.pop();
    else stack.push(nums[i]);
  }

  if (stack.length) console.log(stack.reduce((acc, num) => acc + num));
  else console.log(0);
});
