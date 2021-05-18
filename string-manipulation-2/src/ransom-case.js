/* exported ransomCase */

// place to store new string, without caps
// place to store new word
// go through each letter
// if letter position is odd, capitalize it & add to new word
// if letter position is even, just add to new word

function ransomCase(string) {
  var lower = string.toLowerCase();
  var newWord = '';
  for (var i = 0; i < string.length; i++) {
    var nextLetter = lower.charAt(i);
    if (i % 2 > 0) {
      nextLetter = nextLetter.toUpperCase();
    }
    newWord += nextLetter;
  }
  return newWord;
}
