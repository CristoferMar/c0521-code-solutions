/* exported lastChars */

// store new empty string
// check each character who comes after the starting point of the sting length - the charactes in length
// add the current character to the sting
// return the string

function lastChars(length, string) {
  var lastShort = '';
  for (var i = (string.length - length); i < string.length; i++) {
    lastShort += string.charAt(i);
  }
  return lastShort;
}
