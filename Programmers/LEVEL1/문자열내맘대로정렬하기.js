function solution(strings, n) {
  return strings.sort((prev, cur) => {
    if (prev[n] > cur[n]) return 1;
    else if (prev[n] < cur[n]) return -1;
    else if (prev[n] === cur[n]) {
      if (prev > cur) return 1;
      else if (prev < cur) return -1;
    }
  });
}

function solution(strings, n) {
  let answer = [];
  answer = strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else {
      return a.localeCompare(b);
    }
  });
  return answer;
}
