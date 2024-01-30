// O(log n) 예제 [이진 탐색]
const arr = [];

function log(k, s, e) {
  for (let i = s; i <= e; i++) {
    arr.push(i);
    let m = (s + e) / 2;

    if (arr[m] === k) {
      console.log(m);
    } else if (arr[m] > k) {
      return log(k, s, m - 1);
    } else {
      return log(k, m + 1, e);
    }
  }
}

/* 
한번 처리할 때마다 검색해야 하는 데이터의 양이 절반씩 떨어지는 알고리즘
수많은 데이터가 존재해도 성능은 크게 차이나지 않는다.
*/
