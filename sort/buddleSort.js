/**
Compare the first item to the second item.
If the first item should be after the second item, swap them.
Compare the second item to the third item.
If the second item should be after the third item, swap them.
Continue until the end of the data set is reached.
*/
function swap(list, index1, index2) {
  var temp = list[index1];
  list[index1] = list[index2];
  list[index2] = temp;
}
function bubbleSort(list) {
  var i, j, len = list.length, stop;
  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (list[j] > list[j+1]) {
        swap(list, j, j+1);
      }
    }
  }
  return list;
}

console.log(bubbleSort([3,2,1,5,4]))