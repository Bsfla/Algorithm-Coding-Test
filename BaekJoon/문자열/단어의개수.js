const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = " ";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const word = input.split(" ");

  console.log(
    word.reduce((acc, bcc) => {
      if (bcc !== "") acc += 1;

      return acc;
    }, 0)
  );
  process.exit();
});
