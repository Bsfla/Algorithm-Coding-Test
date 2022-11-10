function solution(progresses, speeds) {
  const answers = [];
  let cnt = 0;

  while (speeds.length > 0) {
    for (let i = 0; i < speeds.length; i++) {
      if (progresses[i] < 100) progresses[i] += speeds[i];
    }

    while (progresses[0] >= 100) {
      cnt++;
      progresses.shift();
      speeds.shift();
    }

    if (cnt > 0) {
      answers.push(cnt);
      cnt = 0;
    }
  }

  return answers;
}

function solution(progresses, speeds) {
  const releaseDays = [];
  const skillCounts = [];

  for (let i = 0; i < progresses.length; i++) {
    let count = 0;

    while (progresses[i] < 100) {
      progresses[i] += speeds[i];
      count += 1;

      if (progresses[i] >= 100) {
        if (releaseDays[releaseDays.length - 1] >= count) {
          let frontSkillCount = skillCounts.pop();
          skillCounts.push(frontSkillCount + 1);
        } else {
          releaseDays.push(count);
          skillCounts.push(1);
        }

        break;
      }
    }
  }
  return skillCounts;
}
