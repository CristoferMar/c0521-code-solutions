/* exported firstChars */

// store empty string
// check each character
// add character to sting, up until desired length
// return sting

function firstChars(length, string) {
  var short = '';
  for (var i = 0; i < length; i++) {
    short += string.charAt(i);
  }
  return short;
}
