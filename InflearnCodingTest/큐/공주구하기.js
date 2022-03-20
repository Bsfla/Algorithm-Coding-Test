function solution(N, k) {
    const que = [];
    let answer = 0;
    
    for (let i = 1; i < N + 1; i++) {
        que.push(i)
    }

    while(que.length) {
        for (let i = 0; i < k - 1; i++) {
            que.push(que.shift());
        }
        que.shift();

        if (que.length === 1) {
          answer = que.shift();
        }
     }
    return answer;
    
}
