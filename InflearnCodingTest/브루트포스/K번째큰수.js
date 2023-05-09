function solution(k, arr) {
  const answer = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        sum = arr[i] + arr[j] + arr[k];
        answer.push(sum);
      }
    }
  }

  return answer[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(3, arr));
