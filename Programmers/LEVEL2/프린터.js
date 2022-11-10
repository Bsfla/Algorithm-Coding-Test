function solution(priorities, location) {
  let count = 0;

  while (priorities.length !== 0) {
    const docs = priorities.shift();
    const max = Math.max(...priorities);

    if (max > docs) priorities.push(docs);
    else {
      count++;
      if (location === 0) return count;
    }
    location--;
    if (location === -1) location = priorities.length - 1;
  }
}
