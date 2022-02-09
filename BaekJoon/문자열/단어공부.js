const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = " ";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const word = input.toUpperCase();
  const obj = {};
  const answer = [];
  let max = 0;

  for (let alpha of word) {
    if (obj[alpha]) obj[alpha] += 1;
    else obj[alpha] = 1;
  }

  max = Math.max(...Object.values(obj));

  for (let key in obj) {
    if (obj[key] === max) answer.push(key);
  }

  answer.length === 1 ? console.log(answer[0]) : console.log("?");

  process.exit();
});
