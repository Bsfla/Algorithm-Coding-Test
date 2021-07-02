const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = 0;
rl.on("line", function (line) {
    input = line;
}).on("close", function () {
    let sum = 0;
    let result = 0;
    let str = []

    for (let i = 1; i < Number(input) + 1; i++) {
        str = String(i).split('');
        sum = str.reduce((acc, bcc) => Number(acc) + Number(bcc));
        result = i + sum;
        if (result === Number(input)) {
           console.log(i);
           break;
        } else if (i === Number(input)) console.log(0);
    }
    process.exit();
});
