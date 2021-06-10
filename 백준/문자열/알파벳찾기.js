const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = ' ';

rl.on('line', function (line) {
    input = String(line);
}).on('close', function () {
    const answer = [];
    const alpha = 'abcdefghijklmnopqrstuvwxyz';

    let indexNum = 0

    for (let i = 0; i < alpha.length; i++) {
        indexNum = input.indexOf(alpha[i]);
        answer.push(indexNum);

    }

    console.log(answer.join(' '));
});