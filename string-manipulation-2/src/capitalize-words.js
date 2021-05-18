/* exported capitalizeWords */

// store string as lower case
// split and store string by space into list
// run a loop through each new item on the list
//    store current word from array
//    remove the first letter & store lastBit
//    store first letter & capitalize first letter
//    join first and lastBit & store
//    replace the item on the list with the new word
//    if item is not last, add space between
// return the new list

function capitalizeWords(string) {
  var fixing = string.toLowerCase();
  var newArray = fixing.split(' ');
  fixing = '';
  for (var i = 0; i < newArray.length; i++) {
    var word = newArray[i];
    var lastBit = word.substr(1);
    var first = word.charAt(0).toUpperCase();
    fixing += (first + lastBit);
    if (i < newArray.length - 1) {
      fixing += ' ';
    }
  }
  return fixing;
}
