// O(n^2) 예제
const people = ["정용훈", "홍길동", "전우치", "이순신", "세종대왕"];

const On2Algorithm = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

// 입력 데이터 크기의 제곱만큼 처리시간이 걸리는 알고리즘
On2Algorithm(people);
