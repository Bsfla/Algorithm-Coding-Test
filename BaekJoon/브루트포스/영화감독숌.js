const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
rl.on("line", function (line) {
  N = parseInt(line);
}).on("close", function () {
  const EndNumber = "666";
  let movie = 0;
  let count = 0;

  while (true) {
    if (String(count).includes(EndNumber)) {
      movie++;
      if (movie === N) {
        console.log(count);
        break;
      }
    }

    count++;
  }
  process.exit();
});
