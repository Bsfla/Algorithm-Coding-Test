const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
   let firstLine = input.shift().split(' ');
   let n = parseInt(firstLine[0]);
   let k = parseInt(firstLine[1]);
   let count = 0
   let now = 0;
   

   for(let i = n+1; i > -1; i--) {
       now = parseInt(input[i]);
       if (k / now >= 1) {
           count += parseInt(k / now);
           k %= now;
       }
       if (k === 0) break;
    }
    console.log(count)
    process.exit();
});
 