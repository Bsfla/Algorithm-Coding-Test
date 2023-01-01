function solution(timeList) {
  timeList.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let temp = [];
  let result = Number.MIN_SAFE_INTEGER;

  for (time of timeList) {
    const [start, end] = time;

    temp.push(end);

    temp = temp.filter((el) => start < el);

    result = Math.max(result, temp.length);
  }

  return result;
}
