function insertionSort(array) {
    let cur = 0;
    let left = 0;

    for (let i = 0; i < array.length; i++) {
        cur = array[i];
        left = i-1;

        while(left >= 0 && array[left] > cur) {
            array[left + 1] = array[left];
            array[left] = cur;
            cur = array[left];
            left--

        }
    }
    return array;
}

console.log(insertionSort([5,4,3,2,1]));