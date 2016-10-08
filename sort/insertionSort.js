function insertionSort(list) {
  var len = list.length, value, i, j;
  for (i = 0; i < len; i++) {
    value = list[i];
    for (j = i-1; j > -1 && list[j] > value; j--) {
      list[j+1] = list[j]
    }
    list[j+1] = value;
  }
  return list;
}

console.log(insertionSort([4,2,3,5,6,1])) // [1,2,3,4,5,6]