const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let second = 0;

rl.on('line', function (line) {
    second = Number(line);
}).on('close', function () {
    const button = [300, 60, 10];
    let count = [];
    let countElement = 0;

    button.forEach((el) => {
        countElement = parseInt(second / el);
        count.push(countElement);
        second %= el;
    })

    if (second === 0) console.log(...count);
    else console.log(-1)
    
    
    process.exit();
});