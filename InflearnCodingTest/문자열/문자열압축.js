function solution(str) {
  let count = 1;
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer += str[i];
      if (count > 1) answer += String(count);
      count = 1;
    }
  }

  return answer;
}
