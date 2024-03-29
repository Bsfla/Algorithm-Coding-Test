function count(mid, music) {
  let count = 1;
  let sum = 0;

  for (let i = 0; i < music.length; i++) {
    if (sum + music[i] <= mid) {
      sum += music[i];
    } else {
      count += 1;
      sum = music[i];
    }
  }

  return count;
}

function solution(N, M, music) {
  music.sort((a, b) => a - b);
  const answer = [];
  let left = music[music.length - 1];
  let right = music.reduce((acc, curr) => acc + curr, 0);
  let mid = 0;

  while (left <= right) {
    mid = parseInt((left + right) / 2);

    if (count(mid, music) <= M) {
      right = mid - 1;
      answer.push(mid);
    } else {
      break;
    }
  }

  return Math.min(...answer);
}
