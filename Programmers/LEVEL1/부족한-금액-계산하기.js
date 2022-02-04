function solution(price, money, count) {
  let sum = 0;
  let result = 0;

  for (let i = 1; i < count + 1; i++) {
    sum += price * i;
  }

  result = sum - money;

  return sum < money ? 0 : result;
}
