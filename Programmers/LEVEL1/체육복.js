function solution(n, lost, reserve) {
  const realReserve = reserve
    .filter((el) => !lost.includes(el))
    .sort((a, b) => a - b);
  const realLost = lost
    .filter((el) => !reserve.includes(el))
    .sort((a, b) => a - b);
  let studentHave = n - realLost.length;
  let frontCheck = 0;
  let behindCheck = 0;

  realLost.forEach((el, idx) => {
    frontCheck = realReserve.indexOf(el - 1);
    behindCheck = realReserve.indexOf(el + 1);

    if (frontCheck !== -1) {
      realReserve.splice(frontCheck, 1);
      studentHave++;
    } else if (behindCheck !== -1) {
      realReserve.splice(behindCheck, 1);
      studentHave++;
    }
  });
  return studentHave;
}
