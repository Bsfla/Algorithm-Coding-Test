function solution(s) {
  const answer = s.split('');
  let count = 0;
  
  for (let i = 0; i < answer.length; i++) {
      if (answer[i] !== ' ') {
        if (count % 2 !== 0) answer[i] = answer[i].toLowerCase();
        else answer[i] = answer[i].toUpperCase();
        count++;
      }
      if (answer[i] === ' ') count = 0;
  }
  
  return answer.join('');
}