/* exported difference */

// store new empty array
// store place for second array to be edited

// check each item in first array
//     check each item in second array
//         compare first item to second item
//         if they match
//             splice curent second item from second array
//             break
//     push curernt first item to empty array
//     push each remaining item in second array into empty array

function difference(first, second) {
  var difArray = [];
  var trmSecond = second;

  for (var i = 0; i < first.length; i++) {
    var post = 1;
    for (var s = 0; s < trmSecond.length; s++) {
      if (first[i] === trmSecond[s]) {
        trmSecond.splice(s, 1);
        post = 0;
        break;
      }
    }
    if (post > 0) {
      difArray.push(first[i]);
    }
  }

  difArray = difArray.concat(trmSecond);
  return difArray;
}
