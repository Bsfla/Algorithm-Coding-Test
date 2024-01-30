const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  for (let i = 0; i < input; i++) {
    let str = "";

    for (let j = 0; j < input - i; j++) {
      str += "*";
    }
    console.log(str);
  }
  process.exit();
});
