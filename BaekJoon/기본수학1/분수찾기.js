const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N = 0;

rl.on('line', function(line) {
    N = line;
}).on('close', function() {
    let [start, stage] = [1, 1];
    let [x, y] = [0, 0];
    let gap = 0;

    while (start + stage <= N) {
        start += stage;
        stage += 1;
    }

    gap = N - start;
    x = gap + 1;
    y = stage - gap;

    if (stage % 2 === 0) {
        console.log(`${x}/${y}`);
    } else {
        console.log(`${y}/${x}`);
    } 
});