const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () {
    const N = input[0];
    const list = input.slice(1).map(Number);
    const count = {};

    for( let i = 0; i < N; i++) {
        count[list[i]] = 0;
    }
    console.log(count);
})