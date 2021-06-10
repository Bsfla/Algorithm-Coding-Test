const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
  const num = Number(input[0]);

  let count = 0,
      sum = 0;
  
  for (let i = 1; i < num; i++) {
      count = 1;
      sum = 0;
    for (let j = 0; j < input[i].length; j++) {
         if (input[i][j] === 'O') {
             sum += count;
             count++;
        } else count = 1;
    }
    console.log(sum);
  }
  
  process.exit();
});