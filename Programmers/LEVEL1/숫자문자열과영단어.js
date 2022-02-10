function solution(s) {
  const word = [
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

  let str = "";
  let result = "";

  s.split("").forEach((el) => {
    if (isNaN(el)) {
      str += el;
      if (word.includes(str)) {
        result += word.indexOf(str);
        str = "";
      }
    } else result += el;
  });

  return Number(result);
}

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

  words.map((word, idx) => {
    while (s.includes(word)) {
      s = s.replace(word, idx);
    }
  });

  return Number(s);
}
