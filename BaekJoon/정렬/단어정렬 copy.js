const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const N = input.shift();
    const sorted = input.sort((a, b) =>  a.length - b.length || a.localeCompare(b));
    const uniqueValues = new Set(sorted);


    console.log(Array.from(uniqueValues).join('\n'));
});