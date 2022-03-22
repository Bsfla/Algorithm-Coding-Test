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
  const seat = input[0];
  let count = 0;
  let isCoupleSeat = false;

  for (let i = 0; i < N; i++) {
      if (seat[i] === 'L') {
        count += 0.5;
        isCoupleSeat = true
      } else {
          count += 1;
          
      }
   }

   if (isCoupleSeat) console.log(count + 1);
   else console.log(count);
  process.exit();
});
