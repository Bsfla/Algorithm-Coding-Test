function solution(student) {
  const [N, M] = student.shift();
  let answer = 0;

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      let count = 0;
      for (let k = 0; k < M; k++) {
        let mento = 0;
        let mentie = 0;
        for (let s = 0; s < N; s++) {
          if (student[k][s] === i) mento = s;
          else if (student[k][s] === j) mentie = s;
        }
        if (mento < mentie) count += 1;
      }

      if (count === M) answer += 1;
    }
  }
  return console.log(answer);
}
const student = [
  [4, 3],
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(student));
