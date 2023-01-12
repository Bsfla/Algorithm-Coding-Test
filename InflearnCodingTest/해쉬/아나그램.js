function solution(value1, value2) {
  const obj = {};

  for (let value of value1) {
    if (value in obj) obj[value] += 1;
    else obj[value] = 1;
  }

  for (let value of value2) {
    obj[value] -= 1;
  }

  return Object.values(obj).filter((value) => value !== 0).length !== 0
    ? false
    : true;
}
