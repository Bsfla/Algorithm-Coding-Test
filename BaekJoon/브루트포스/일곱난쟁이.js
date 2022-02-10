const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const arr = input.map((el) => Number(el));
  const sum = arr.reduce((acc, bcc) => acc + bcc);
  const diff = sum - 100;

  for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (diff === arr[i] + arr[j]) {
        arr.splice(i, 1);
        arr.splice(j - 1, 1);
      }
    }
  }

  console.log(arr.sort((a, b) => a - b).join("\n"));
});
