function count(horseHouse, dist) {
  let endPoint = horseHouse[0];
  let count = 1;

  for (let i = 0; i < horseHouse.length; i++) {
    if (horseHouse[i] - endPoint >= dist) {
      endPoint = horseHouse[i];
      count += 1;
    }
  }

  return count;
}

function solution(c, horseHouse) {
  horseHouse.sort((a, b) => a - b);

  let left = 1;
  let right = horseHouse[horseHouse.length - 1];
  let mid = 0;
  let result = 0;

  while (left <= right) {
    mid = parseInt((left + right) / 2);

    if (count(horseHouse, mid) >= c) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}
