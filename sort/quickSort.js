
function wrap(list, left, right) {
  var temp = list[left];
  list[left] = list[right];
  list[right] = temp;
}

function partition(list, left, right) {
  var povit = list[Math.floor((left + right) / 2)];
  var i = left, j = right;
  while (i <= j) {
    while(list[i] < povit) {
      i++;
    }
    while(list[j] > povit) {
      j--;
    }
    if (i<=j) {
      wrap(list, i, j);
      i++;
      j--
    }
  }
  return i;
}

function quickSort(list, left, right) {
  var index;
  if (list.length > 1) {
    left = typeof left == 'number' ? left : 0;
    right = typeof right == 'number' ? right : list.length-1;
    index = partition(list, left, right);
    if (left < index-1) {
      quickSort(list, left, index-1);
    }
    if (right > index) {
      quickSort(list, index, right);
    }
  }
  return list;
}
var arr = [1,3,5,2,6,8,9,9,45,4,34,3]
// [ 1, 2, 3, 3, 4, 5, 6, 8, 9, 9, 34, 45 ]
console.log(quickSort(arr, 0, arr.length-1))