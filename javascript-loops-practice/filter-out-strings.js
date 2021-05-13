/* exported filterOutStrings */
function filterOutStrings(values) {
  var nums = [];
  var i = 0;
  while (i < values.length) {
    if (typeof values[i] !== 'string') {
      nums.push(values[i]);
    }
    i++;
  }
  return nums;
}
