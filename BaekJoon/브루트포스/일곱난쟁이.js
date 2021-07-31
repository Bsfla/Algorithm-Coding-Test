const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () {
        const arr = input.map(el => Number(el));
        let sum = arr.reduce((a,b) => a + b);
        let diff = sum - 100;
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] === diff) {
                    arr.splice(i, 1);
                    arr.splice(j -1 , 1);
                }
            }
        }
        arr.sort((a, b) => a - b);
        console.log(arr.join('\n'));
        
});