function solution(progresses, speeds) {
    const answers = [];
    let cnt = 0;
    
   while(speeds.length > 0) {
       for (let i = 0; i < speeds.length; i++) {
           if (progresses[i] < 100) progresses[i] += speeds[i]; 
       }
       
       while(progresses[0] >= 100) {
           cnt++;
           progresses.shift();
           speeds.shift();
       }
       
       if (cnt > 0) {
           answers.push(cnt);
           cnt = 0;
       }
   }
    
    return answers;
}