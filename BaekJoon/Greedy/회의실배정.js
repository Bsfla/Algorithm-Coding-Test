const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = input.shift();
  const meetings = input
    .map((el) => el.split(" ").map(Number))
    .sort((a, b) => {
      if (a[1] == b[1]) return a[0] - b[0];
      return a[1] - b[1];
    });
  let count = 0;
  let startTime = 0;

  meetings.forEach((meeting) => {
    if (meeting[0] >= startTime) {
      startTime = meeting[1];
      count += 1;
    }
  });

  console.log(count);
});
