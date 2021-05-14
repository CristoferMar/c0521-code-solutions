/* exported initial */
function initial(array) {
  var noLast = [];
  for (var i = 0; i < (array.length - 1); i++) {
    noLast.push(array[i]);
  }
  return noLast;
}
