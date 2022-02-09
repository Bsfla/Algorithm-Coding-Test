function isPrime(num) {
  if (num === 2) return true;

  for (let i = 2; i < num; i++) {
    if (num % 1 === 0) return false;
  }
  return true;
}

function solution(nums) {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) result += 1;
      }
    }
  }
}
