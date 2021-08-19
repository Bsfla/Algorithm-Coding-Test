function solution(s) {
    const word = ['zero', 'one', 'two', 'three','four','five','six','seven','eight','nine'];
    
    let str = '';
    let result = '';
   
    s.split("").forEach((el) => {
       if (isNaN(el)) {
           str += el;
           if (word.includes(str)) {
               result += word.indexOf(str);
               str = '';
           }
       }
       else result += el
    })
    
    return Number(result);
}