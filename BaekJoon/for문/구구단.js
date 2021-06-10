const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num = 0;

rl.on('line', function (line) {
    num = Number(line);
}).on('close', function () {
    let answer = 0;
    
    for (let i = 1; i < 10; i++) {
        answer = `${num} * ${i} = ${num * i} `;
        console.log(answer);
    }
    
    
    process.exit();
});