function solution(student) {
    let answer = 0;
    let n = student[0].length;
    let cnt = 0;
    let mentor = 0;
    let mentie = 0;
   
    for(let i = 1; i < n + 1; i++){
        for(let j = 1; j < n + 1; j++){
            cnt = 0;
            for(let k = 0; k < student.length; k++) {
                mentor = 0;
                mentie = 0;
                for(let s = 0; s < n; s++) {
                    if (student[k][s] === i) mentor = s;
                    else if (student[k][s] === j) mentie = s;
                }
                if(mentor < mentie) cnt++;
            } 
            if(cnt === student.length) answer++;
        }
    }
    return answer;
}