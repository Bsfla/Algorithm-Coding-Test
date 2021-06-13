const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = " ";

rl.on('line', function(line) {
    input = line;
}).on('close', function() {
    const dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < dial.length; j++) {
            if (input[i] in dial[j]) count += j+2;
        } 
    }

    console.log(count);


   
    process.exit();
});