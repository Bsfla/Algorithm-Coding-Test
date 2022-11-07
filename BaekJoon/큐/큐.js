const readline = require("readline"),
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const N = input.shift();
  const que = [];
  const result = [];

  input.forEach((el) => {
    const command = el.split(" ");
    if (command[0] === "push") que.push(parseInt(command[1]));
    else if (command[0] === "pop")
      que.length ? result.push(que.shift()) : result.push(-1);
    else if (command[0] === "size") result.push(que.length);
    else if (command[0] === "empty")
      que.length ? result.push(0) : result.push(1);
    else if (command[0] === "front")
      que.length ? result.push(que[0]) : result.push(-1);
    else if (command[0] === "back")
      que.length ? result.push(que[que.length - 1]) : result.push(-1);
  });

  console.log(result.join("\n"));
});
