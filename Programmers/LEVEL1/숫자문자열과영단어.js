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

function solution(s) {
  const arr = [
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
  let result = "";
  let str = "";

  s.split("").forEach((el) => {
    if (isNaN(el)) {
      str += el;

      if (arr.includes(str)) {
        result += arr.indexOf(str);
        str = "";
      }
    } else {
      result += el;
    }
  });

  return Number(result);
}
