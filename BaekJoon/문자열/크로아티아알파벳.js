const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = " ";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const alpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let word = input;

  alpha.map((alphabet) => {
    while (word.includes(alphabet)) {
      word = word.replace(alphabet, "a");
    }
  });

  console.log(word.length);

  process.exit();
});
