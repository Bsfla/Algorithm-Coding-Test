const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = " ";

rl.on('line', function(line) {
    input = line;
}).on('close', function() {
    const alpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
    let  result = ""

    let answer = ""

    for (let i = 0; i < alpha.length; i++) {
         input = input.replace(alpha[i], 'a')

    }

    console.log(input);

   
    process.exit();
});