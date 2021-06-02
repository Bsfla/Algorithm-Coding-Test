const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = 0;

rl.on('line', function (line) {
    input = Number(line);
}).on('close', function () {
    if (input % 4 === 0 && input % 100 !== 0 || input % 400 === 0) console.log(1);
    else console.log(0);
    process.exit();
});