function solution(participant, completion) {
  const temp = {};

  for (let i of participant) {
    if (i in temp) temp[i] += 1;
    else temp[i] = 1;
  }

  for (let j of completion) {
    temp[j] -= 1;
  }

  for (let i of participant) {
    if (temp[i] === 1) return i;
  }
}

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
