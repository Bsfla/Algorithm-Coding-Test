function solution(s) {
  const stack = [];

  for (let word of s) {
    if (word === stack[stack.length - 1]) stack.pop();
    else stack.push(word);
  }
  return stack.length ? 0 : 1;
}
