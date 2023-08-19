const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" "));
}).on("close", function () {
  const result = [];
  let total = Number(input.shift()[1]);

  input.forEach((passengers) => {
    const [outPassenger, inPassenger] = passengers;

    total -= Number(outPassenger);
    total += Number(inPassenger);

    result.push(total);
  });
  console.log(Math.max(...result));

  process.exit();
});
