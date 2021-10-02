const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = input[0];
  const arr = [];
  const stack = [];
  let answer = "";
  let count = 0;

  for (let i = 0; i < N; i++) {
    arr[i] = i + 1;
  }

  for (let j = 1; j < N + 1; j++) {
    count = 1;
    while (count <= N && stack[stack.length - 1] != input[j]) {
      stack.push(arr.shift());
      answer += "+\n";
      count++;
    }
    if (stack.length > 0 && stack[stack.length - 1] == input[j]) {
      stack.pop();
      answer += "-\n";
      console.log(input[j]);
    } else {
      answer = "No";
      break;
    }
  }

  console.log(answer);
});
