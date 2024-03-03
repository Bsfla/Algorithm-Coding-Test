const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.shift();

  for (let i = 0; i < input.length; i++) {
    const binary = Number(input[i]).toString(2);
    const tempBinaryArray = [...binary].reverse();

    console.log(
      tempBinaryArray
        .map((item, index) => (item === "1" ? index : null))
        .filter((el) => el !== null)
        .join(" ")
    );
  }

  process.exit();
});
