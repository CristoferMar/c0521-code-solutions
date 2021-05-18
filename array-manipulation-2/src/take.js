/* exported take */

// store our new array
// give new array a value of the 0 index up to count
// return the array

function take(array, count) {
  var newArray = array.slice(0, count);
  return newArray;
}
