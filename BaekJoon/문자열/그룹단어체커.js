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
  const N = parseInt(input.shift());
  let result = [];
  let count = 0;
  let word = [];
  let groupChecker = true;

  for (let i = 0; i < N; i++) {
    result = [];
    word = input[i].split("");
    grouptChecker = true;
    word.map((el) => {
      if (result.indexOf(el) === -1) result.push(el);
      else {
        if (result.indexOf(el) !== result.length - 1) groupChecker = false;
      }
    });
    if (groupChecker) count += 1;
  }

  console.log(count);
  process.exit();
});
