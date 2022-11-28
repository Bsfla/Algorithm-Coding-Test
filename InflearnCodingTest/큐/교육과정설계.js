function solution(sequence, lecture) {
  const sequences = sequence.split("");
  let lectureDesign = "";

  lecture.split("").forEach((el) => {
    if (sequences.includes(el)) lectureDesign += el;
  });

  return lectureDesign === sequence ? "YES" : "NO";
}

//큐 풀이
function solution(sequence, lectures) {
  const que = sequence.split("");

  for (let lecture of lectures) {
    if (que.includes(lecture)) {
      if (lecture !== que[0]) return "NO";
      else que.shift();
    }
  }

  if (que.length) return "NO";

  return "YES";
}
