function solution(sticks) {
   let stack = [];
   let result = 0;
   
   for (let i = 0; i < sticks.length; i++) {
       if (sticks[i] === '(') stack.push(sticks[i]);
       else {
           if (sticks[i - 1] === '(') {
               stack.pop();
               result += stack.length;
           } else {
               result += 1;
               stack.pop();
           }
       }
   }

   return result;
   
}