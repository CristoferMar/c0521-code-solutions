/* exported swapChars */

// create storage for new string
// check each letter
// if i equals 1stIndex
//     add value of 2ndIndez
// if i euqals 2ndIndex
//     add value of 1stIndex
// else add value of current position to string
// return string

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string.charAt(secondIndex);
    } else if (i === secondIndex) {
      newString += string.charAt(firstIndex);
    } else {
      newString += string.charAt(i);
    }
  }
  return newString;
}
