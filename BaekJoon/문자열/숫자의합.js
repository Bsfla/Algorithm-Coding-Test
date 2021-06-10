const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
    const num = Number(input[0]),
          a = input[1];
    let sum = 0;
    
    for (let i = 0; i < num; i++) {
        sum += Number(a[i]);
    }

    console.log(sum);
   
    process.exit();
});