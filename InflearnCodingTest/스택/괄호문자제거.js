function solution(str) {
  const stack = [];

  for (let word of str) {
    if (word === ")") {
      while (stack.pop() !== "(");
    } else stack.push(word);
  }

  console.log(stack.join(""));
}
