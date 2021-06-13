const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = " ";

rl.on('line', function(line) {
    input = line;
}).on('close', function() {
    const word = input.toUpperCase();
    const obj = {};
    
    let result = [];
    let maxCount = 0;

    for (let i = 0; i < word.length; i++) {
        obj[word[i]] = 0
    }

    for (let i = 0; i < word.length; i++) {
        obj[word[i]] += 1
    }

    maxCount = Math.max(...Object.values(obj));

    for (let el in obj) {
        if (obj[el] === maxCount) result.push(el);
    }
    
    result.length > 1 ? console.log("?") : console.log(result[0]);


   
    process.exit();
});