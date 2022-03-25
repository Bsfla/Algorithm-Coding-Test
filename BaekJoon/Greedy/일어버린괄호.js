const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const calculation = input.map(el => {
      el.split('-')
  })
  process.exit();
});
