function solution(nums) {
  const ponketmon = Array.from(new Set(nums));
  const N = parseInt(nums.length / 2);

  if (N < ponketmon.length) return N;
  else return ponketmon.length;
}

function solution(nums) {
  const ponketmon = [...new Set(nums)];
  const selectPonketmon = nums.length / 2;

  if (ponketmon.length > selectPonketmon) return selectPonketmon;
  else return ponketmon.length;
}
