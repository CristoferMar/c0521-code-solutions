/* exported chunk */

// store blank main array
// store a subArray to be pushed into main blank array
// guard incase array is empty
// look at each item in the OG array
// push each item to subArray from OG array
// if length of subarray is = to size:
//      push subarray into main array
//      clear subArray
// after looking at the whole OG array, check subArray
//       if subArray is empty(lngth is 0!!! !== []), return main array
//       else push subArray into main array
// return mainArray

function chunk(array, size) {
  var mainArray = [];
  var subArray = [];
  if (array.length === 0) { return mainArray; }
  for (var i = 0; i < array.length; i++) {
    subArray.push(array[i]);
    if (subArray.length === size) {
      mainArray.push(subArray);
      subArray = [];
    }
  }
  if (subArray.length === 0) {
    return mainArray;
  } else {
    mainArray.push(subArray);
  }
  return mainArray;
}
