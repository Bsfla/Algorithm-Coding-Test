function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === false) {
      absolutes[i] = -absolutes[i];
    }
    result += absolutes[i];
  }
  return result;
}
// for문 풀이입니다

function solution(absolutes, signs) {
  return absolutes
    .map((num, idx) => {
      if (signs[idx] === false) return (absolutes[idx] = -num);
      return num;
    })
    .reduce((acc, bcc) => acc + bcc);
}
//reduce() 를 이용한 풀이입니다
