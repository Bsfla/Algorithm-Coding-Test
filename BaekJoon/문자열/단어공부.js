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
  const result = [];
  let maxCount = 0;

  word.split("").forEach((alphabet) => {
    if (alphabet in obj) obj[alphabet] += 1;
    else obj[alphabet] = 1;
  });

  maxCount = Math.max(...Object.values(obj));

  for (let key in obj) {
    if (obj[key] === maxCount) result.push(key);
  }

  console.log(result.length === 1 ? result[0] : "?");

  process.exit();
});
