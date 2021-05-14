/* exported capitalize */
function capitalize(word) {
  var lower = word.toLowerCase();
  lower = lower.substr(1);

  var first = word.charAt(0);
  first = first.toUpperCase();
  var caps = first + lower;

  return caps;
}
