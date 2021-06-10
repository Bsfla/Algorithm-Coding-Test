const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
}).on('close', function () {
    let hour = Number(input[0]),
          minute = Number(input[1]);
    
    if (minute > 44) minute -= 45;
    else if (hour === 0) {
        hour = 23;
        minute += 15;
    } else {
        hour -= 1;
        minute += 15
    }
    console.log(hour, minute);
    process.exit();
});