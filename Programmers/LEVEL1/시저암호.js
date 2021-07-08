function solution(s, n) {
    const replaceNumber = [];
    
    let answer = [];
    let ascciNumber = 0;
    let sum = 0;
    
    for (let i = 0; i < s.length; i++) {
        ascciNumber = s.charCodeAt(i);
        sum = ascciNumber + n;
        if (65 <= ascciNumber && ascciNumber <= 90) {
            if (sum >= 91) {
                replaceNumber.push(sum - 26);
            } else replaceNumber.push(sum);
        } else if (97 <= ascciNumber && ascciNumber <= 122) {
            if (sum >= 123) {
                replaceNumber.push(sum - 26);
            } else replaceNumber.push(sum);
        } else replaceNumber.push(ascciNumber);
    }
    
    answer = replaceNumber.map(el => String.fromCharCode(el));
    
    return answer.join('');
}