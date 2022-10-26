const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = input.shift();
  const changeMonies = input.map(Number);
  const coinList = [25, 10, 5, 1];
  const result = [];

  changeMonies.forEach((money) => {
    const moneyCounts = coinList.map((coin) => {
      let count = parseInt(money / coin);
      if (count >= 1) {
        money %= coin;
        return count;
      } else return 0;
    });

    result.push(moneyCounts);
  });

  result.forEach((el) => {
    console.log(el.join(" "));
  });

  process.exit();
});
