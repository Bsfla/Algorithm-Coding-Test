const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const N = Number(input);
  let sum = 0;

  for (let i = 0; i < N + 1; i++) {
    sum =
      i +
      String(i)
        .split("")
        .reduce((acc, num) => {
          acc += Number(num);
          return acc;
        }, 0);
    if (sum === N) {
      console.log(i);
      break;
    } else if (i === N) console.log(0);
  }
  process.exit();
});
