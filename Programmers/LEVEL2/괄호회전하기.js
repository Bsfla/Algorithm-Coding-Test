function solution(s) {
  const x = s.length;
  const brackets = s.split("");
  let count = 0;

  for (let i = 0; i < x; i++) {
    const stack = [];
    let isValid = true;

    for (let bracket of brackets) {
      if (bracket === "[" || bracket === "(" || bracket === "{")
        stack.push(bracket);
      else {
        if (bracket === "]") {
          if (stack[stack.length - 1] === "[") stack.pop();
          else {
            isValid = false;
            break;
          }
        } else if (bracket === ")") {
          if (stack[stack.length - 1] === "(") stack.pop();
          else {
            isValid = false;
            break;
          }
        } else if (bracket === "}") {
          if (stack[stack.length - 1] === "{") stack.pop();
          else {
            isValid = false;
            break;
          }
        }
      }
    }

    if (isValid && stack.length === 0) count += 1;
    brackets.push(brackets.shift());
  }
  return count;
}
