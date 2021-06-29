/* exported unique */

// store new empty array
// put guard for empty input (if input is empty array, return [])
// check each item in OG array
//     check each item in new array
//         if current OG item is eual to an item on new array
//             break
//         else push current OG item to new array
// return new array

function unique(array) {
  if (array.length === 0) { return []; }
  var oneOfaKind = [array[0]];
  for (var i = 1; i < array.length; i++) {
    var post = true;
    for (var s = 0; s < oneOfaKind.length; s++) {
      if (array[i] === oneOfaKind[s]) {
        post = false;
        break;
      }
    }
    if (post === true) {
      oneOfaKind.push(array[i]);
    }
  }
  return oneOfaKind;
}
