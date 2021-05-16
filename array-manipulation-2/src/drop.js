/* exported drop */

// store new array
// remove items in array up to count & sliced list to new array
// return array

function drop(array, count) {
  var arrayDropped = array.slice(count);
  return arrayDropped;
}
