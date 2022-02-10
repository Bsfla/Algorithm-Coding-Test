const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
    const rest = [];
    let num = 0
    
    input.forEach(el => {
        num = el % 42;

        if (rest.indexOf(num) === -1) rest.push(num);
    });
    console.log(rest.length);
});