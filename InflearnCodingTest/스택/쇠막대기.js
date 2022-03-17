function solution(sticks) {
   const stack = [];
   let razerCount = 0;

   for (let stick of sticks) {
       stack.push(stick);
       if (stack[stack.length - 1] === ')' && stack[stack.length - 2] === '(') {
           razerCount++;
           stack.pop();
           stack.pop();
       }
   }
}