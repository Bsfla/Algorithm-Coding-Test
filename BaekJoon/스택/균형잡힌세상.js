const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.forEach((el) => {
    const result = [];
    if (el.length === 1 && el[0] === ".") return;

    el.split("").forEach((str) => {
      if (str === "(" || str === "[") result.push(str);
      else if (str === ")") {
        if (result[result.length - 1] === "(") result.pop();
        else result.push(str);
      } else if (str === "]") {
        if (result[result.length - 1] === "[") result.pop();
        else result.push(str);
      }
    });

    if (el.length === 1) console.log("yes");
    else if (result.length > 0) console.log("no");
    else console.log("yes");
  });
});
