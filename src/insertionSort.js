function insertionSort(array) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
}
