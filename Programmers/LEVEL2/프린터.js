function solution(priorities, location) {
    const que = [];
    let firstNum = 0;
    let count = 0;
    
    while (priorities.length > 0) {
        firstNum = priorities.shift();
        if (firstNum < Math.max(...priorities)) priorities.push(firstNum);
       else {
           count += 1;
           if (location === 0) return count;
       }
        location -= 1;
        if (location === -1) location = priorities.length - 1;
   }
}