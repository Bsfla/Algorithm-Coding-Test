const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
    const inputs = input[0].split(' ').map(value => Number(value))
    const A = inputs[0];
    const B = inputs[1];
    const C = inputs[2];

    if (B >= C)  console.log(-1);
    else console.log(Math.floor(A / (C - B)) + 1);
});