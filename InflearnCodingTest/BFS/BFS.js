function solution() {
  const que = [];
  let answer = "";

  que.push(1);

  while (que.length) {
    const value = que.shift();
    answer += value + " ";

    for (let nv of [value * 2, value * 2 + 1]) {
      if (nv > 7) break;
      que.push(nv);
    }
  }

  return answer;
}
