function solution(s, n) {
  const result = [];
  const alphabets = s.split("");

  alphabets.forEach((alphabet, index) => {
    const asciiNumber = s.charCodeAt(index);
    const replaceNumber = asciiNumber + n;

    if (asciiNumber >= 65 && asciiNumber < 91) {
      if (replaceNumber > 90) result.push(replaceNumber - 26);
      else result.push(replaceNumber);
    } else if (asciiNumber >= 97 && asciiNumber < 123) {
      if (replaceNumber > 122) result.push(replaceNumber - 26);
      else result.push(replaceNumber);
    } else result.push(asciiNumber);
  });

  return result.map((el) => String.fromCharCode(el)).join("");
}

//아스키 안쓴 풀이

function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const answer = "";

  for (var i = 0; i < s.length; i++) {
    const text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    const textArr = upper.includes(text) ? upper : lower;
    let index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
