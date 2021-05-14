/* exported reverseWord */
function reverseWord(word) {
  var reverse = word.charAt(word.length - 1);
  for (var i = (word.length - 2); i >= 0; i--) {
    reverse += word.charAt(i);
  }
  return reverse;
}
