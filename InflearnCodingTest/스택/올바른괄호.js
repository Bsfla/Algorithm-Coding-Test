function solution(k) {
    const stack = [];
    let result = 'YES';

    for (let i = 0; i < k.length; i++) {
        if (k[i] === '(') stack.push(1);
        else {
            if (stack.length) stack.pop();
            else result = 'NO';
        }
    }
    if (stack.length) result = 'NO';
    return result;
    
}

let arr = '()()';
console.log(solution(arr));