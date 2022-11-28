function solution(sticks) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < sticks.length; i++) {
    if (sticks[i] === "(") stack.push(sticks[i]);
    else {
      if (sticks[i - 1] === "(") {
        stack.pop();
        count += stack.length;
      } else {
        count += 1;
        stack.pop();
      }
    }
  }

  console.log(count);
}
