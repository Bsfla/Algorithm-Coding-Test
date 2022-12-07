function solution(a, b, n) {
  let restBottle = 0;
  let colaBottle = 0;
  let emptyBottle = 0;
  let getBottle = 0;

  while (n >= a) {
    restBottle = n % a;
    emptyBottle = n - restBottle;
    getBottle = (emptyBottle / a) * b;
    colaBottle += getBottle;
    n = getBottle + restBottle;
  }
  return colaBottle;
}
