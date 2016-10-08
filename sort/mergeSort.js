
function merge(left, right) {
  var result = [], il = ir = 0;
  while(il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++])
    } else {
      result.push(right[ir++])
    }
  }
  return result.concat(left.slice(il)).concat(right.slice(ir));
}

function mergetSort(list) {
  if (list.length < 2) return list;
  var middle = Math.floor(list.length / 2);
  var left = list.slice(0, middle);
  var right = list.slice(middle, list.length);
  return merge(mergetSort(left), mergetSort(right)) 
}

console.log(mergetSort([3,2,4,1,5])) // [1,2,3,4,5]