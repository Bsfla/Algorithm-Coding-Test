function solution(people, limit) {
  let light = people.length - 1;
  let heavy = 0;
  let sum = 0;
  let boatCount = 0;

  people.sort((a, b) => b - a);

  while (heavy < light) {
    sum = people[heavy] + people[light];

    if (sum > limit) {
      heavy++;
    } else {
      heavy++;
      light--;
    }
    boatCount++;
  }
  if (light == heavy) boatCount++;
  return boatCount;
}
