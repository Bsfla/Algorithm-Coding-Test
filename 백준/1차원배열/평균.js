const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
  const count = Number(input[0]);
  const inputs = input[1].split(' ').map(value => Number(value));
  const max = Math.max(...inputs);
  
  let avg = 0;
  
  for (let i = 0; i < inputs.length; i++) {
    inputs[i] = inputs[i] / max * 100;
  }

  avg =  inputs.reduce((a, b) => a + b) / count;

  console.log(avg);
   
  process.exit();
});