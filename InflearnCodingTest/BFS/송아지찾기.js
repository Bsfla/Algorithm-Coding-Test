function solution(s, e) {
  const coordinate = Array.from({ length: 10001 }, () => 0);
  const dis = Array.from({ length: 10001 }, () => 0);
  const que = [];

  coordinate[s] = 1;
  que.push(s);
  dis[s] = 0;

  while (que.length) {
    const value = que.shift();
    for (let nv of [value - 1, value + 1, value + 5]) {
      if (nv === e) return dis[value] + 1;
      if (nv <= 10000 && nv > 0 && coordinate[nv] == 0) {
        que.push(nv);
        coordinate[nv] = 1;

        dis[nv] = dis[value] + 1;
      }
    }
  }
  return count;
}
