function solution(s) {
    const stack = [];
    let result = 0;

    for (let x of s) {
        if (!isNaN(x)) stack.push(parseInt(x));
        else {
            if (x === '+') {
                result = stack[stack,length - 2] + stack[stack.length - 1];
                stack.pop();
                stack.pop();
                stack.push(value);
            } else if (x === '-') {
                result = stack[stack,length - 2] - stack[stack.length - 1];
                stack.pop();
                stack.pop();
                stack.push(value);
            } else if (x === '*') {
                result = stack[stack,length - 2] * stack[stack.length - 1];
                stack.pop();
                stack.pop();
                stack.push(value);
            } else if (x === '/') {
                result = stack[stack,length - 2] / stack[stack.length - 1];
                stack.pop();
                stack.pop();
                stack.push(value);
            }
        }
    }
    console.log(stack[0]);
}