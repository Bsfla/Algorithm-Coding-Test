function solution(s) {
  let pCounter = 0;
  let yCounter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === "p") pCounter++;
    else if (s[i].toLowerCase() === "y") yCounter++;
  }

  if (pCounter === yCounter) return true;
  else return false;
}
