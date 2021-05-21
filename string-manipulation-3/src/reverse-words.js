/* exported reverseWords */

// this one is easy
// you already did a reverse word. the only difference here is the split by ' '
// then concat each reversed word

// new storage for: split the sentance into items of an array
// new storage for empty string, which will hold reversed reverseWords

// check each word of the split array
// check each letter of the current word
//       post it in decending order in reversewordS
// concat reversedword into reversed sentance
// followed by a space (' ')
// at end of function, remove character at end, which will be an extra space

function reverseWords(string) {
  var arraycut = string.split(' ');
  var reversedSentance = '';

  for (var i = 0; i < arraycut.length; i++) {
    for (var c = arraycut[i].length - 1; c >= 0; c--) {
      reversedSentance += arraycut[i].charAt(c);
    }
    reversedSentance += ' ';
  }
  reversedSentance = reversedSentance.substr(0, reversedSentance.length - 1);
  return reversedSentance;
}
