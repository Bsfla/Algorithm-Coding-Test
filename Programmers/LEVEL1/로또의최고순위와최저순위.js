function solution(lottos, win_nums) {
  const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  let winCount = 0;
  let zeroCount = 0;

  winCount = win_nums.filter((num) => lottos.includes(num)).length;
  zeroCount = lottos.filter((num) => num === 0).length;

  return [rank[winCount + zeroCount], rank[winCount]];
}

function solution(lottos, win_nums) {
  const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  const winCount = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  const zeroCount = lottos.filter((lotto) => lotto == 0).length;

  return [rank[winCount + zeroCount], rank[winCount]];
}
