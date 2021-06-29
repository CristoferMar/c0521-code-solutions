/* exported zip */

// store place for new empty array
// store place for loop count
// compare length of both arrays
// update loop count to shortest of the two arrays

// check each item in first array with loop limit of loop count
//     create array that contains item at i for both arrays & push temp array into new array

// return new array

function zip(first, second) {
  var zipped = [];
  var count = 0;
  if (first.length <= second.length) {
    count = first.length;
  } else {
    count = second.length;
  }
  for (var i = 0; i < count; i++) {
    zipped.push([first[i], second[i]]);
  }
  return zipped;
}
