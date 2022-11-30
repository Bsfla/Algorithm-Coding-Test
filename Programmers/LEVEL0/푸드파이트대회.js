function solution(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    let divide = parseInt(food[i] / 2);

    for (let j = 0; j < divide; j++) {
      answer += String(i);
    }
  }
  return `${answer}0${answer.split("").reverse().join("")}`;
}
