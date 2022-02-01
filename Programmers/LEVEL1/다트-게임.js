function solution(dartResult) {
  const result = [];
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      temp = parseInt(dartResult[i]);
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      }
    } else if (dartResult[i] === "S") result.push(Math.pow(temp, 1));
    else if (dartResult[i] === "D") result.push(Math.pow(temp, 2));
    else if (dartResult[i] === "T") result.push(Math.pow(temp, 3));
    else if (dartResult[i] === "*") {
      result[result.length - 1] *= 2;
      result[result.length - 2] *= 2;
    } else if (dartResult[i] === "#") result[result.length - 1] *= -1;
  }
  return result.reduce((acc, bcc) => acc + bcc);
}
