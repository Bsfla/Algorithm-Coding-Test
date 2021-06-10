const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
    const inputs = input[1].split(' ').map(value => Number(value))
    const results = [];
    
    let sum = 0;
    let result = 0;
    
    inputs.sort((a, b) => a - b);
    
    inputs.forEach(el => {
        sum = sum + el;
        results.push(count);
    })

    console.log(results.reduce((a, b) => a + b));
process.exit();
});