// O(2^n) 예제 [피보나치 수열]
function a(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return a(n - 1) + a(n - 2);
}

console.log(a(10));
// 재귀 함수를 통해 구현
// 데이터가 증가함에 따라 처리량이 n^2 보다 현져히 늘어나는 알고리즘
