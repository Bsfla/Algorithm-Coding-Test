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
    const listArray = new Array(201);

    let result = '';

    input.map(el => {
        const splited = el.split(' ');
        const age = parseInt(splited[0]);

        if (listArray[age] === undefined) listArray[age] = [];
        listArray[age].push([age, splited[1]]);
    })

   listArray.map(list => {
       if (list) {
           for (let i = 0; i < list.length; i++) {
               result += `${list[i][0]} ${list[i][1]} \n`;
           }
       }
   });

   console.log(result);
});