function solution(s) {
  const str = s.split(" ").map((el) => el.toLowerCase());
  const result = [];
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    temp = "";
    for (let j = 0; j < str[i].length; j++) {
      if (j == 0) {
        if (isNaN(str[i][j])) temp += str[i][0].toUpperCase();
        else temp += str[i][j];
      } else temp += str[i][j];
    }
    result.push(temp);
  }

  return result.join(" ");
}
