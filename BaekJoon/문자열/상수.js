const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = " ";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const [firstNum, secondNum] = input.split(" ");
  const firstReverseNum = String(firstNum).split("").reverse().join("");
  const secondReverseNum = String(secondNum).split("").reverse().join("");

  console.log(
    firstReverseNum > secondReverseNum
      ? parseInt(firstReverseNum)
      : parseInt(secondReverseNum)
  );
  process.exit();
});
