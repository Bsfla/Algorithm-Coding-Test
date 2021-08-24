function position(keypad, number) {
    for (let i = 0; i < keypad.length; i++) {
        for (let j = 0; j < keypad[i].length; j++) {
            if (number === keypad[i][j]) return [i, j];
        }
    }
}

function distanceCalculation(centerNum, hand) {
   return Math.abs(centerNum[0] - hand[0]) + Math.abs(centerNum[1] - hand[1])
}

function solution(numbers, hand) {
   const left = [1,4,7];
   const right = [3,6,9];
   const keypad = [
       [1,2,3], 
       [4,5,6],
       [7,8,9],
       ['*',0,'#']
   ];
   
   let result = "";
   let centerNum = [];
   let rightHand = position(keypad,'#');
   let leftHand = position(keypad,'*');
   
   numbers.forEach(el => {
       if (right.includes(el)) {
           result += 'R';
           rightHand = position(keypad,el);
       } else if (left.includes(el)) {
           result += 'L';
           leftHand = position(keypad, el);
       } else {
           centerNum = position(keypad, el);
           
           if (distanceCalculation(centerNum, rightHand) < distanceCalculation(centerNum, leftHand)) {
               result += 'R';
               rightHand = centerNum;
           } else if (distanceCalculation(centerNum, rightHand) > distanceCalculation(centerNum, leftHand)) {
                result += 'L';
                leftHand = centerNum;
           } else {
                if (hand === 'right') { 
                    result += 'R';
                    rightHand = centerNum;
                } else {
                    result += 'L';
                    leftHand = centerNum;
                  }
            }
        }
    })
    return result;
}