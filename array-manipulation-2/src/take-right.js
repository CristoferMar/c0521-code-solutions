/* exported takeRight */

// store a new array
// add items on the array, from left to right and add to array
// if an array is 5 and you want two, start at 5 - 2, which will be the third position

function takeRight(array, count) {
  var rightSide = array.slice(array.length - count);
  return rightSide;
}
