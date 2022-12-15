function solution(n, words) {
  const stack = [];
  const lastWord = [];

  let sequence = 0;
  let count = 0;

  for (let word of words) {
    count += 1;

    if (count === 1) sequence += 1;

    if (stack.includes(word)) return [count, sequence];
    else if (lastWord.length) {
      if (lastWord[lastWord.length - 1] !== word[0]) return [count, sequence];
    }

    stack.push(word);
    lastWord.push(word[word.length - 1]);

    if (count === n) count = 0;
  }

  return [0, 0];
}
