function solution(x, n) {
    const result = [];

    for (let i = 1; i < n + 1; i++) {
        result.push(x * i);
    }
    
    return result;
}