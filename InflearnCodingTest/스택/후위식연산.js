function solution(value) {
  const stack = [];

  value.split("").forEach((el) => {
    if (isNaN(el)) {
      let frontNum = stack.pop();
      let secondNum = stack.pop();

      if (el === "+") {
        stack.push(frontNum + secondNum);
      } else if (el === "-") {
        stack.push(secondNum - frontNum);
      } else if (el === "*") {
        stack.push(secondNum * frontNum);
      } else {
        stack.push(secondNum / frontNum);
      }
    } else stack.push(Number(el));
  });

  console.log(stack[0]);
}
