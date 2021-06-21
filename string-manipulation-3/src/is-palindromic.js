/* exported isPalindromic */

// make storage for sting in reverse
// check each character in sting going backwards
// add each backwards character to reverse string

// store variable for string without spaces
// check each character
// if character is not a space, add to new string

// if reverse string is the same as string
//     return true
// if they are different
//     return false

function isPalindromic(string) {
  var revString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      revString += string[i];
    }
  }

  var noSpace = '';
  for (var p = 0; p < string.length; p++) {
    if (string[p] !== ' ') {
      noSpace += string[p];
    }
  }

  if (revString === noSpace) {
    return true;
  } else {
    return false;
  }
}
