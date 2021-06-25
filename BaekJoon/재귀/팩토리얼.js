const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = 0;
rl.on("line", function (line) {
    input = parseInt(line);
}).on("close", function () {
    function fact(num) {
        if (num === 0) return 1;
        return num * fact(num - 1);
    }

    console.log(fact(input));
    process.exit();
});

