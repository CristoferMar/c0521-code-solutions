/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var plusSuff = [];
  for (var i = 0; i < words.length; i++) {
    plusSuff.push(words[i] + suffix);
  }
  return plusSuff;
}
