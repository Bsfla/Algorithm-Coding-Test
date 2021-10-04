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
  const M = input.map((el) => parseInt(el));
  const stack = [];

  for (let i = 0; i < N; i++) {
    if (M[i] === 0) {
      stack.pop();
    } else {
      stack.push(M[i]);
    }
  }

  if (stack.length) console.log(stack.reduce((acc, bcc) => acc + bcc));
  else console.log(0);
});
