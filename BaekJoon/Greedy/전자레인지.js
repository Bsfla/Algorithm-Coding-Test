const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let second = 0;

rl.on("line", function (line) {
  second = Number(line);
}).on("close", function () {
  const buttons = [300, 60, 10];
  let clickedButton = [0, 0, 0];

  buttons.forEach((button, index) => {
    const clickTime = parseInt(second / button);

    if (clickTime >= 0) {
      second %= button;
      clickedButton[index] += clickTime;
    }
  });

  second === 0 ? console.log(clickedButton.join(" ")) : console.log(-1);

  process.exit();
});
