function selectionSort (array) {
    for (let i = 0; i < array.length; i++) {
         let minIndex = i;
         for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
               minIndex = j;
            }
         }
        if (minIndex !== i) {
          let swap = array[minIndex];
          array[minIndex] = array[i];
          array[i] = swap;
        }
        console.log(`${i}회전: ${array}`);
    }
       return array;
    }
    console.log(selectionSort([5, 4, 3, 2, 1]));
    
    
   