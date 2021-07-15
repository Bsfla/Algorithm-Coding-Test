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
    const group = input.map(el => el.length);
    const max = Math.max(...group);
    const min = Math.min(...group);
    const word = [];

    for (let i = min; i < max + 1; i++) {
        const result = [];
        for (let j = 0; j < N; j++) {
            if (input[j].length === i) {
                if (result.indexOf(input[j]) === -1) result.push(input[j]);
            }

        }
    
        if (group.length > 1) {
            word.push(...result.sort());
        } else {
           word.push(...result);
       }
    }
    console.log(word.join('\n'));
});