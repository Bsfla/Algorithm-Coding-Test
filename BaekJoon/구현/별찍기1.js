const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  let str = "";

  for (let i = 0; i < input; i++) {
    for (let j = 0; j < i + 1; j++) {
      str += "*";
    }
    str += "\n";
  }

  console.log(str);

  process.exit();
});
