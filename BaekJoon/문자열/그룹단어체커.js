const { group } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const num = input.shift();
  let groupChecker = true;
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    groupChecker = true;
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] !== input[i][j + 1]) {
        const restStr = input[i].slice(j + 1);

        if (restStr.includes(input[i][j])) {
          groupChecker = false;
          break;
        }
      }
    }

    if (groupChecker) {
      count += 1;
    }
  }
  console.log(count);

  process.exit();
});
