/**
 * 二分查找
 * https://www.nczonline.net/blog/2009/09/01/computer-science-in-javascript-binary-search/
 * If currentValue equals value, you’re done.
 * If value is less than currentValue, go left. Go to step 1.
 * If value is greater than currentValue, go right. Go to step 1.
 */
function binarySearch(list, value) {
  var startIndex = 0;
  var stopIndex = list.length - 1;
  var middle = Math.floor((startIndex + stopIndex) / 2);
  while (value != list[middle] && startIndex < stopIndex) {
    if (value > list[middle]) {
      startIndex = middle + 1;
    } else if (value < list[middle]) {
      stopIndex = middle - 1;
    }
    middle = Math.floor((startIndex + stopIndex) / 2);
  }
  return (value != list[middle]) ? -1 : middle;
}

var list = ["a","b","c","d","e","f","g","h","i","j"];
console.log(binarySearch(list, "i"));    //8