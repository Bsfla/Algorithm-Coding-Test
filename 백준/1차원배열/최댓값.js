const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
  const max = Math.max(...input);
  const maxIndex = input.indexOf(String(max)) + 1;

  console.log(max);
  console.log(maxIndex);
  process.exit();
});