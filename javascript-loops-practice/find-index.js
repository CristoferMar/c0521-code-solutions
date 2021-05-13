/* exported findIndex */
function findIndex(array, value) {
  var ind = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      ind = i;
      break;
    }
  }
  return ind;
}
