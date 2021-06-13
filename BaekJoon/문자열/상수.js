const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = " ";

rl.on('line', function(line) {
    input = line;
}).on('close', function() {
    const str = input.split(' ').map(value => String(value));
    const firstNum = str[0].split("").reverse().join("");
    const secondNum = str[1].split("").reverse().join("");

    if (Number(firstNum) < Number(secondNum)) console.log(secondNum);
    else console.log(firstNum)

    process.exit();
});