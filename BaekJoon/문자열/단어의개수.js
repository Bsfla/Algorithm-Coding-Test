const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = " ";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const str = input.split(" ");

  console.log(
    str.reduce((acc, curr) => {
      if (curr !== " ") acc += 1;
      return acc;
    }, 0)
  );
  process.exit();
});
