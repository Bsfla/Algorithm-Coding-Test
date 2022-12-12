function solution(n) {
  const num = n.toString(2);
  let plusNum = 1;

  while (true) {
    const nextNum = (Number(n) + plusNum).toString(2);
    if (nextNum.toString(10) > n) {
      const nextNumlength = nextNum.split("").filter((el) => el == 1).length;
      const numLength = num.split("").filter((el) => el == 1).length;
      if (nextNumlength === numLength) return parseInt(nextNum, 2);
    }
    plusNum += 1;
  }
}
