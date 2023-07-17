function solution(want, number, discount) {
  let result = 0;

  for (let i = 0; i < discount.length; i++) {
    const copy = discount.slice(i, i + 10);
    let flag = 0;

    for (let j = 0; j < copy.length; j++) {
      if (copy.filter((el) => el === want[j]).length === number[j]) {
        flag += 1;
      }
    }

    if (flag === want.length) {
      result += 1;
    }
  }
  return result;
}
