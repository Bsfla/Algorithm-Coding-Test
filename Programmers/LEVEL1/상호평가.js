function rate(score) {
    if (score >= 90) return 'A';
    else if (score >= 80 && score < 90 ) return 'B';
    else if (score >= 70 && score < 80 ) return 'C';
    else if (score >= 50 && score < 70 ) return 'D';
    else return 'F';
}

function solution(scores) {
   const avg = [];
   const grade = [];
   
   let evaluation = [];
   let max = 0;
   let min = 0;
   let sum = 0;
   let del = false;
   
   for (let i = 0; i < scores.length; i++) {
       evaluation = [];
       sum = 0;
       del = false;
       for (let j = 0; j < scores.length; j++) {
           evaluation.push(scores[j][i]);
       }
       max = Math.max(...evaluation);
       min = Math.min(...evaluation);
      
       if (evaluation[i] === max || evaluation[i] === min) {
          if (evaluation.filter(el => evaluation[i] === el).length === 1 ) {
               evaluation.splice(i,1,0);
               del = true;
           } 
       }
      sum = evaluation.reduce((a,b) => a + b);
      if (del) avg.push(sum / (scores.length - 1));
      else avg.push(sum / scores.length);
     }
     
     avg.forEach(el => {
         grade.push(rate(el));
     })
     return grade.join('');
}