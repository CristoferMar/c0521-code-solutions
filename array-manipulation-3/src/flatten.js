/* exported flatten */

// store new, empty array
// check each index of array
//     if typeof is 'object' UPDATE! use Array.isarray is true
//         check each item in subarray
//             push item into empty array
//     push item into empty array

function flatten(array) {
  var flatArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (var s = 0; s < array[i].length; s++) {
        flatArray.push(array[i][s]);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
}
