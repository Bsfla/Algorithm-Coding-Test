const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', function(line) {
    input = line;
}).on('close', function() {
    let start = 1;
    let count = 1;

    while (input > start) {
        start += 6 * count;
        count++;
    }

    console.log(count)
    
});