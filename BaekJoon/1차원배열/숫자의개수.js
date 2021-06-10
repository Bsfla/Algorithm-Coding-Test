const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let count = 0;

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
    const num = String(input[0] * input[1] * input[2]);
    
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < num.length; i++) {
            if (i === Number(num[j])) count++;
        }
        console.log(count);
        count = 0;
    }
  
});