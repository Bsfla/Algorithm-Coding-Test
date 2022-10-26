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
  let cupHolder = 1;

  input[0].split("").forEach((seat) => {
    if (seat === "S") cupHolder += 1;
    else cupHolder += 0.5;
  });

  cupHolder >= N ? console.log(Number(N)) : console.log(cupHolder);

  process.exit();
});
