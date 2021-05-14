/* exported tail */
function tail(array) {
  var noFirst = [];
  for (var i = 1; i < array.length; i++) {
    noFirst.push(array[i]);
  }
  return noFirst;
}
