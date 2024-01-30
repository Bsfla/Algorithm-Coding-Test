const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const tempArray = input.split("");

  const result = tempArray.map((el) => {
    const asciNumber = el.charCodeAt();

    if (asciNumber >= 68) {
      return String.fromCharCode(asciNumber - 3);
    }

    return String.fromCharCode(asciNumber + 26 - 3);
  });

  console.log(result.join(""));
  process.exit();
});
