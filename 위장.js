function solution(clothes) {
  const obj = {};
  let answer = 1;

  for (let clothe of clothes) {
    if (clothe[1] in obj) obj[clothe[1]] += 1;
    else obj[clothe[1]] = 2;
  }

  for (let key in obj) {
    answer *= obj[key];
  }

  return answer - 1;
}
