/* exported isUpperCased */
function isUpperCased(word) {
  var upper = word.toUpperCase();
  if (word === upper) {
    return true;
  }
  return false;
}
