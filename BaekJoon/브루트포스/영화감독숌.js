const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = 0;
rl.on("line", function (line) {
    N = parseInt(line);
}).on("close", function () {
    let movie = 666;
    

    while (N > 0) {
        if (movie.toString().includes('666')) {
            N -= 1;
            if (N === 0) break;
        }
        movie += 1;
    } 
    console.log(movie);
    process.exit();
});