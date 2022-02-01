function solution(n, lost, reserve) {
  const realReserve = reserve
    .filter((el) => !lost.includes(el))
    .sort((a, b) => a - b);
  const realLost = lost
    .filter((el) => !reserve.includes(el))
    .sort((a, b) => a - b);
  let frontCheck = 0;
  let behindCheck = 0;

  realReserve.forEach((el) => {
    frontCheck = realLost.indexOf(el - 1);
    behindCheck = realLost.indexOf(el + 1);

    if (frontCheck !== -1) {
      realLost.splice(frontCheck, 1);
      studentHave++;
    } else if (behindCheck !== -1) {
      realLost.splice(behindCheck, 1);
      studentHave++;
    }
  });
  return n - realLost.length;
}
