const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

let num = 0;

rl.on("line", function (line) {
    num = line;
}).on("close", function () { 
    const result = Array.from(num).sort((a,b) => b - a);
    console.log(result.join(''));
});