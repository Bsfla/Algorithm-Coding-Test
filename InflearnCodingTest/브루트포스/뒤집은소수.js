function isPrime(num) {
    if(num === 2)
    return true;
  
    for(let i = 2; i<num; i++){
      if(num % i === 0){
        return false;
      }
    }
    return true;
}

function solution(s){
    const arr = s.map(el => String(el));
    const answer = [];
    const result = [];
 
    for (let i = 0; i < arr.length; i++) {
         answer.push(parseInt(arr[i].split('').reverse().join('')));
    }

    for (let key of answer) {
        if (isPrime(Number(key))) result.push(Number(key))
    }

    console.log(result);
}

let arr=[32,55,62,20,250,370,200,30,100];
console.log(solution(arr));