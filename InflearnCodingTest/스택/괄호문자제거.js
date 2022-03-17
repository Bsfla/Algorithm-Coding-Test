function solution(k) {
    const stack = [];

    for (word of k) {
      if (word === ')') {
        while(stack[stack.length - 1] === '(') stack.pop()
      } else stack.push(word);
    }
    return stack.join("");
  }