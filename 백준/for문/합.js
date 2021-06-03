const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num = 0;

rl.on('line', function (line) {
    num = Number(line);
}).on('close', function () {
    let sum = 0;
    
    for (let i = 0; i < num + 1; i++) {
        sum += i;
    }
    console.log(sum);
    
    
    process.exit();
});