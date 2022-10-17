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
  let M = 0;

  for (let i = 0; i < N + 1; i++) {
    sum =
      i +
      String(i)
        .split("")
        .reduce((acc, curr) => {
          return (acc += Number(curr));
        }, 0);

    if (sum === N) {
      M = i;
      break;
    } else if (i === N) M = 0;
  }

  console.log(M);

  process.exit();
});
