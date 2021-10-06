function solution(table, languages, preference) {
  const array = table.map((el) => el.split(" "));
  const preferLanguages = {};
  const point = ["직업군", 5, 4, 3, 2, 1];
  const job = ["SI", "CONTENTS", "HARDWARE", "PORTAL", "GAME"];
  const total = [];
  const recommend = [];

  let max = 0;
  let result = [];

  for (let i = 0; i < languages.length; i++) {
    let key = languages[i];
    preferLanguages[key] = preference[i];
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < languages.length; j++) {
      if (array[i].indexOf(languages[j]) !== -1) {
        result.push(
          preferLanguages[languages[j]] * point[array[i].indexOf(languages[j])]
        );
      }
    }
    total.push(result.reduce((acc, bcc) => acc + bcc, 0));
    result = [];
  }
  max = Math.max(...total);

  total.forEach((el, idx) => {
    if (el === max) {
      recommend.push(job[idx]);
    }
  });

  recommend.sort();

  return recommend[0];
}
