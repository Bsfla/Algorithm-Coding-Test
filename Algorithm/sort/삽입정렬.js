function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let cur = array[i];
        let left = i - 1;

        while (left >= 0 && array[left] > cur) {
            array[left + 1] = array[left];
            array[left] = cur;
            cur = array[left];
            left--;
        }
    }
    return array;
}

console.log(insertionSort([5,4,3,2,1]));