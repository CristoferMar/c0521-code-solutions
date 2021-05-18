/* exported dropRight */

// store new array
// cut off end piece of array and add it to our array
// return new array

function dropRight(array, count) {
  var frontPart = array.slice(0, array.length - count);
  return frontPart;
}
