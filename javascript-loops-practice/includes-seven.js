/* exported includesSeven */
function includesSeven(array) {
  var noSevens = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      noSevens = true;
      break;
    }
  }
  return noSevens;
}
