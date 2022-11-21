function solution(str, word) {
  const result = [];
  let distance = 0;

  for (let value of str) {
    if (value === word) {
      distance = 0;
      result.push(distance);
    } else {
      distance++;
      result.push(distance);
    }
  }

  distance = 0;

  for (let i = str.length - 1; i > -1; i--) {
    if (str[i] === word) {
      distance = 0;
    } else {
      distance++;
      result[i] = Math.min(result[i], distance);
    }
  }

  return result;
}
