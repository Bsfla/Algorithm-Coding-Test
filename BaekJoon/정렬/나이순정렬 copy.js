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
    const indexArr = [];
    const splited = input.map(el => el.split(' '));

    let result = "";

    for (let i = 0; i < input.length; i++) {
        indexArr.push([parseInt(splited[i][0]), splited[i][1], i]);
    }
    
    indexArr.sort((a, b) => a[0] - b[0] || a[2] - b[2]).forEach(el => (
        result += `${el[0]} ${el[1]}\n`));

    
    console.log(result);
});