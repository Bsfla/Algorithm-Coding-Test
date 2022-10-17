const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ");
  const cards = input[1].split(" ").map((card) => parseInt(card));
  const result = [];
  let sum = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        sum = cards[i] + cards[j] + cards[k];

        if (sum <= M) result.push(sum);
      }
    }
  }

  console.log(Math.max(...result));

  process.exit();
});
