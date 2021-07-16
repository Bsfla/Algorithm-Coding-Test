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
    const location = input.map(coords =>
        coords.split(' ').map(nums => parseInt(nums))
      );
    let result = '';

   
    
    location.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    
    }).forEach(el => {
        result += `${el[0]} ${el[1]}\n`
    })
    console.log(result);
});