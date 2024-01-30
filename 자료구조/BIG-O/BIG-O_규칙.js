// rule1 최악의 상황

const people = ["배범수", "홍길동", "전우치", "이순신", "세종대왕"];

const example1 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "전우치") {
      console.log("전우치입니다.");
    }
  }
};

/* 
해당 코드는 3번만 돌아도 '전우치'를 찾을 수 있으나 불필요하게 5번 반복합니다. 
조건에 맞는 값을 찾았을 경우 return을 작성해주면 효율적인 코드가 됩니다.

하지만, 마지막에 있는 '세종대왕'을 찾으려면, 중간에 조건이 있더라도 최대의 반복 즉, 5번의 반복을 실행할 수 밖에 없습니다.

이런 최악의 상황을 고려했을 때, element의 개수가 증가한다면 작업 횟수도 정비례하게 증가하게 됩니다. 
그렇기에 해당 경우는 O(n) Linear Time이 됩니다.
*/

const example2 = (items) => {
  const middleIndex = Math.floor(items.length / 2);

  console.log(items[0]); // O(1)

  for (let i = 0; i < middleIndex; i++) {
    console.log(items[index]);
  } // O(n / 2)

  for (let i = 0; i < 100; i++) {
    console.log("1");
  } // O(100)
};

/* 
해당 코드의 Big - O를 계산하면 O(1 + n/2 + 100)이 됩니다.
items의 길이가 1억이라면 1을 더하든, 100을 더하든, 1억을 2로 나누는 상황은 크게 달라지지 않습니다.

따라서 상수는 모두 제거하고 O(n)으로 표기해야 합니다.
즉, O(n) Linear Time입니다.
*/

function compareBoxes(boxes) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
}

/*
위 코드 또한 O(n)이 두 번 반복도어 O(2n)이지만, 상수는 버리기 때문에 O(n)으로 표기합니다.

TIP : Big-O 계산은 정확한 속도를 계산하려고 하는 것이 아닙니다.
*/

function compareBoxes(boxes1, boxes2) {
  boxes1.forEach(function (boxes) {
    console.log(boxes);
  }); // O(a)
  boxes2.forEach(function (boxes) {
    console.log(boxes);
  }); // O(b)
}

/*
해당 코드는 인자 값이 서로 다릅니다. 
때문에 각 인자의 크기에 따라 작업 횟수가 달라집니다.
인자 값이 다를 경우 따로 계산해줘야 하기 때문에 이 경우 O(a+b)입니다.
*/

// Big - O Rule 4 : Drop non Dominants
function printAllNumber(numbers) {
  // O(n)
  numbers.forEach(function (number) {
    console.log(number);
  });
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber); // O(n^2)
    });
  });
}
printAllNumber([1, 2, 3, 4, 5]);

/*
  해당 코드의 경우 O(n + n^2)입니다.
  하지만 numbers 배열의 길이가 커질수록 n^2의 작업 횟수가 극적으로 증가하기 때문에 표기법은 O(n^2)입니다.
  */
