const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const firstLine = input.shift().split(" ");
  const coinList = input.reverse();

  let K = parseInt(firstLine[1]);
  let count = 0;

  for (let i = 0; i < firstLine[0]; i++) {
    let now = parseInt(coinList[i]);
    if (K / now >= 1) {
      count += parseInt(K / now);
      K %= now;
    } else if (K === 0) break;
  }

  console.log(count);

  process.exit();
});
