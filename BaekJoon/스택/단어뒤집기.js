const readline = require("readline"),
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  input[0] = input[0].split(" ").map((el) => parseInt(el));
  const N = input[0];
  let result = [];
  let words = input.slice(1);

  
  for (let i = 0; i < N; i++) {
    result = [];
    words[i] = words[i].split(' '); 
    for (let j = 0; j < words[i].length; j++) {
       result.push(words[i][j].split('').reverse().join(''))
    }
    console.log(result.join(' '));
  }
});


