function solution(sequence, schedule) {
    const que = [];
    const arr = sequence.split('');
    let answer = '';
    
    for (let i = 0; i < schedule.length; i++)  {
        if (arr.includes(schedule[i])) answer += schedule[i];
    }
    
    return answer;
    
}