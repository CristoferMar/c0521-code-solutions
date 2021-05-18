/* exported numVowels */

// add storage for counter
// bring string down to lower case & store
// check each letter in string
// if the letter is a vowel, add one to the counter (y is not a vowel in this instance)
// return counter

function numVowels(string) {
  var vowels = 0;
  var lower = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (lower.charAt(i) === 'a' || lower.charAt(i) === 'e' || lower.charAt(i) === 'i' || lower.charAt(i) === 'o' || lower.charAt(i) === 'u') {
      vowels++;
    }
  }
  return vowels;
}
