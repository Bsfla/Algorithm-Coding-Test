function bubbleSort(array) {
   let swap = 0;
   for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length - 1 - i; j++) {
           if (array[j] > array[j + 1]) {
               swap = array[j];
               array[j] = array[j + 1];
               array[j + 1] = swap;           
            }
       }
       if (!swap) break;
   }
   return array;
}

bubbleSort([5,4,3,2,1]);