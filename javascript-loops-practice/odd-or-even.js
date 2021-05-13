/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddsEvens = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 > 0) {
      oddsEvens.push('odd');
    } else {
      oddsEvens.push('even');
    }
  }
  return oddsEvens;
}
