const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const dwarfs = input.map(Number).sort((a, b) => a - b);
  const sum = dwarfs.reduce((acc, curr) => acc + curr);
  const notDwarf = sum - 100;

  for (let i = 0; i < dwarfs.length; i++) {
    for (let j = i + 1; j < dwarfs.length; j++) {
      if (dwarfs[i] + dwarfs[j] === notDwarf) {
        dwarfs.splice(i, 1);
        dwarfs.splice(j - 1, 1);

        console.log(dwarfs.join("\n"));

        return;
      }
    }
  }
});
