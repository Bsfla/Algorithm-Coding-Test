const readline = require("readline"),
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const N = parseInt(input.shift());
  const M = input.map((el) => {
    return el.split(" ");
  });
  const que = [];
  const result = [];

  for (let i = 0; i < M.length; i++) {
      if (M[i][0] === 'push') que.push(parseInt(M[i][1]));
      else if (M[i][0] === 'pop') que.length ? result.push(que.shift()) : result.push(-1);
      else if (M[i][0] === 'empty') que.length ? result.push(0) : result.push(1);
      else if (M[i][0] === 'front') que.length ? result.push(que[0]) : result.push(-1);
      else if (M[i][0] === 'back') que.length ? result.push(que[que.length - 1]) : result.push(-1);
      else if (M[i][0] === 'size') result.push(que.length);
      
  }
  

  console.log(result.join("\n"));   
});
