function solution(X, Y) {
  const common = [];
  const obj = {};

  for (let el of X) {
    if (el in obj) obj[el] += 1;
    else obj[el] = 1;
  }

  for (let el of Y) {
    if (obj[el] > 0) {
      common.push(el);
      obj[el] -= 1;
    }
  }

  if (common.length) {
    common.sort((a, b) => b - a);
    if (common[0] === "0") return "0";
    else return common.join("");
  } else return "-1";
}
