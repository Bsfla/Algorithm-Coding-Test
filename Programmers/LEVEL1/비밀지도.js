function solution(n, arr1, arr2) {
    const answer = [];
    const result = [];
    
    let sum = 0;
    let str = '';
    
    for (let i = 0; i < arr1.length; i++) {
        sum = arr1[i] | arr2[i];
        sum = sum.toString(2);
        answer.push(sum)
    }
    
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer.length; j++) {
            if (answer[i][j] === '1') str += '#';
            else if(answer[i][j] === '0') str += ' ';
        }
       
        if (answer[i].length !== n) {
           for (let k = 0; k < n - answer[i].length; k++) {
                str = ' ' + str;
            }
        }
        result.push(str);
        str = ''
    }
   return result;
}