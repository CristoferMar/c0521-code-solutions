/* exported includes */

// check each item in the array
// if the item is the same the value, say true
// if none match the value, say false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
