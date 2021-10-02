function solution(k) {
    const stack = [];

    for (let x of k) {
      if (x === ")") {
        while (stack.pop() !== "(");
      } else stack.push(x);
    }
    return stack.join("");
  }