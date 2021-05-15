/* exported truncate */

// make container for modified word
// call each letter and add it to the modified word, until i hits length
// when loop is done, concatinate ... to modified word
// return modified word

function truncate(length, string) {
  var newStart = '';
  for (var i = 0; i < length; i++) {
    newStart += string.charAt(i);
  }
  newStart += '...';
  return newStart;
}
