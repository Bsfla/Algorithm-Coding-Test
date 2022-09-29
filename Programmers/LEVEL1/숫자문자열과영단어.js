function solution(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = "";
  let temp = "";

  for (let word of s) {
    if (isNaN(word)) {
      temp += word;
      if (words.includes(temp)) {
        temp = words.indexOf(temp);
        answer += String(temp);
        temp = "";
      }
    } else answer += word;
  }
  return Number(answer);
}
