const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const line = input[1].split(" ").map(Number);
  let count = 0;

  const result = line
    .sort((a, b) => a - b)
    .map((el) => {
      count += el;
      return count;
    })
    .reduce((acc, cur) => acc + cur);

  console.log(result);
  process.exit();
});
