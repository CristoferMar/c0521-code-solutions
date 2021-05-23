/* exported equal */

// check if array lengths are the same
//     if they are different, return false

// check each item of both arrays, correlating to their index
//     if the item in the i position for both arrays is not the same
//             return false
// return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
}
