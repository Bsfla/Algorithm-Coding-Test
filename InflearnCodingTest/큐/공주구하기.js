function solution(N, k) {
  const que = [];
  let answer = 0;

  for (let i = 1; i < N + 1; i++) {
    que.push(i);
  }

  while (que.length) {
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

function solution(N, K) {
  const que = Array.from({ length: N }, (_, index) => index + 1);
  let count = 1;

  while (que.length !== 1) {
    const num = que.shift();

    if (count !== K) {
      que.push(num);
      count += 1;
    } else count = 1;
  }

  return que[0];
}
