function solution(fee, product) {
    const present = product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
    const n = product.length;
    const answer = [];
    let money = 0;
    let cnt = 0;

    for (let i = 0; i < n; i++) {
        money = fee - (present[i][0] / 2 + present[i][1]);
        cnt = 1;
        for (let j = 0; j < n; j++) {
            if (j !== i && present[j][0] + present[j][1] < money + 1) {
                money -= (present[j][0] + present[j][1]);
                cnt++;
            }
        }
        answer.push(cnt);

    }

    return Math.max(...answer);
}

let arr = [[6,6], [2,2], [4,3] , [4, 5], [10, 3]];
console.log(solution(28, arr))