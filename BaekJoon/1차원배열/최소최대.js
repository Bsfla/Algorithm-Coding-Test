const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
  let count = Number(input[0]);
  let inputs = input[1].split(' ').map(value => Number(value))
  let min = inputs[0],
      max = inputs[0];

  for (let i = 0; i < count; i++) {
    if (min > inputs[i]) min = inputs[i];
    else if (max < inputs[i]) max = inputs[i];
  }
  console.log(min, max);
  
  process.exit();
});