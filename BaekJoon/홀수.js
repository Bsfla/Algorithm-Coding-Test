const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const obj = {};
const numbers = arr
  .map((el) => {
    if (obj[el]) obj[el] += 1;
    else obj[el] = 1;
    return Number(el);
  })
  .sort((a, b) => a - b);

const modeTimes = Math.max(...Object.values(obj));
const modeArr = [
  ...new Set(
    Object.keys(obj)
      .sort((a, b) => a - b)
      .filter((el) => obj[el] === modeTimes)
  ),
];
const avg = Math.round(
  numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length
);

console.log(avg === -0 ? 0 : avg);
console.log(numbers[Math.floor(numbers.length / 2)]);
console.log(modeArr[1] || modeArr[0]);
console.log(numbers[numbers.length - 1] - numbers[0]);
