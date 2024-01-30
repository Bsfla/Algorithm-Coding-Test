// O(n) 예제
const people = ["정용훈", "홍길동", "전우치", "이순신", "세종대왕"];

const OnAlgorithm = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "세종대왕") {
      console.log("세종대왕이올시다.");
    }
  }
};

// 입력 데이터의 크기에 비례해서 처리시간도 늘어나는 알고리즘
OnAlgorithm(people);