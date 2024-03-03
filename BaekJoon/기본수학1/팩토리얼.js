/*
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const factorial = (num) => {
    if (num <= 1) {
      return 1;
    }

    return num * factorial(num - 1);
  };

  console.log(factorial(input));
});

*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  let result = 1;
  for (let i = 1; i <= input; i++) {
    result *= i;
  }

  console.log(result);
});
