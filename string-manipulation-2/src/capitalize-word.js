/* exported capitalizeWord */

// make contianer for transforming word to undercase
// if undercase word is 'javascript', assign proper word to mod word
// if it's not,
// remove first letter and store last part
// store first letter
// capitalize first letter
// put first letter with last part
// return product;

function capitalizeWord(word) {
  var lower = word.toLowerCase();
  if (lower === 'javascript') {
    lower = 'JavaScript';
  } else {
    lower = lower.substr(1);

    var first = word.charAt(0);
    first = first.toUpperCase();
    lower = first + lower;
  }
  return lower;
}
