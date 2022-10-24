const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let money = 0;

rl.on("line", function (line) {
  money = Number(line);
}).on("close", function () {
  const smallChange = [500, 100, 50, 10, 5, 1];
  let changeMoney = 1000 - money;
  let count = 0;

  smallChange.forEach((el) => {
    count += parseInt(changeMoney / el);
    changeMoney %= el;
  });

  console.log(count);

  process.exit();
});
