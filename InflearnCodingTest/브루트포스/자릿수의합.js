function solution(s){
    const answer = s.map(el => String(el))
    const result = [];
    
    let max = 0;
    let sum = 0;
    let idx = 0;
    

    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer[i].length; j++) {
             sum += Number(answer[i][j])
        }
        result.push(sum);
        sum = 0;
    }
    
    max = Math.max(...result);
    
    result.forEach((el,index) => {
        if (max === el) idx = index;
    })

    return s[idx];
}

let arr=[128,460,603,40,521,137,123];
console.log(solution(arr));