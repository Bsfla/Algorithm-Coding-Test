const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const score = Number(line);
  if (score >= 90 && score <= 100) console.log('A');



}).on('close', function () {
    process.exit();
  });