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
  let words = input;

  alpha.forEach((alphabet) => {
    if (words.includes(alphabet)) {
      const regexAllCase = new RegExp(alphabet, "gi");
      words = words.replace(regexAllCase, "a");
    }
  });

  console.log(words.length);

  process.exit();
});
