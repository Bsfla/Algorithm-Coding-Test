const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const [N, M] = input.shift().split(" ").map(Number);
    const cardList = input.shift().split(" ").map(Number);
    const length = cardList.length;

    let  sum = 0;
    let  max = 0;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                sum = cardList[i] + cardList[j] + cardList[k];
                if (sum > max && sum <= M) max = sum; 
            }
        }
    }

    console.log(max)
    process.exit();
});
