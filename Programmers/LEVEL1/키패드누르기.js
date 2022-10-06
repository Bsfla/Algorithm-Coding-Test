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

function handlePosition(position) {
    const keyPad = [[1,2,3], 
                    [4,5,6], 
                    [7,8,9], 
                    ['*',0,'#']];
    
    for(let i = 0; i < keyPad.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (position === keyPad[i][j]) return [i, j];
        }
    }
  
      
 }
 
 function handleDistance(centerPosition, handPosition) {
     return Math.abs(centerPosition[0] - handPosition[0]) + Math.abs(centerPosition[1] - handPosition[1]);
 }
 
 function solution(numbers, hand) {
    const leftNumbers = ['*', 7, 4, 1];
    const rightNumbers = ['#', 9, 6, 3];
    const result = [];
    let leftHand = handlePosition('*');
    let rightHand = handlePosition('#');
    
     numbers.forEach(number => {
       if (rightNumbers.includes(number)) {
           result.push('R');
           rightHand = handlePosition(number);
       } else if (leftNumbers.includes(number)) {
           result.push('L');
           leftHand = handlePosition(number);
       } else {
           const centerPosition = handlePosition(number);
           const rightDistance = handleDistance(centerPosition, rightHand);
           const leftDistance = handleDistance(centerPosition, leftHand);
           
           
           if (rightDistance > leftDistance) {
               result.push('L');
               leftHand = handlePosition(number);
           } else if (rightDistance < leftDistance) {
               result.push('R');
               rightHand = handlePosition(number);
           } else {
               if (hand === 'right') {
                   result.push('R');
                   rightHand = handlePosition(number);
               } else {
                   result.push('L');
                   leftHand = handlePosition(number);
               }
           }
       }
    }) 
     
     return result.join('');
                    
 }