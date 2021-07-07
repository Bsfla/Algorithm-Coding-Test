function solution(num) {
    const result = num;
    let [a,b,c] = [0,0,0];
    let sum = 0;
    let cnt = 0;

    while(1) {
        a = Math.floor(num / 10);
        b = input % 10;
        c = (a + b) %  10;
        sum = (b * 10) + c;
        num = sum;
        cnt++;
        if (num === result) {
            console.log(cnt);
            break;
        }
    }
}
    
    
 