function solution(k, tangerine) {
  const obj = {};
  let sum = 0;
  let answer = 0;

  for (let el of tangerine) {
    if (el in obj) obj[el] += 1;
    else obj[el] = 1;
  }

  const tangerineCounts = Object.values(obj).sort((a, b) => b - a);

  for (let count of tangerineCounts) {
    sum += count;
    answer++;

    if (sum >= k) {
      break;
    }
  }
  return answer;
}
