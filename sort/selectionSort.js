/**
Assume the first item is the smallest value.
Compare this item to the second item.
If the second item is smaller than the first, set the second item as the new minimum.
Continue until the end of the data set is reached.
If the minimum value is not the item you started with, swap them.
^^^^ ["b", "a", "d", "c", "e"]
===> ["a", "b", "d", "c", "e"]
*/
function swap(list, first, second) {
  var temp = list[first];
  list[first] = list[second];
  list[second] = temp;
}

function selectionSort(list) {
  var min, i, j, len = list.length;
  for (i = 0; i < len; i++) {
    min = i;
    for (j = i+1; j < len; j++) {
      if (list[j] < list[min]) {
        min = j
      }
    }
    if (i !== min) {
      swap(list, i, min);
    }
  }
  return list;
}

console.log(selectionSort([3,4,2,5,1]));