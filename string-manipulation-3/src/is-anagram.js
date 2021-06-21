/* exported isAnagram */
// crate storage for firstSttring w/o spaces
// crate storage for secondString w/o spaces
// check each char in firstSttring
// if char is not ' ', concat it to the storge
// check each char in secondString
// if char is not ' ', concat it to the storge

// store new match test for each string
// check each char of newFirst
// compare it to each char in newSecond
// if the character matches one character in newSecond
//    concat the letter to both matchFirst & matchSecond

// if matchFirst & matchSecond match, return true

function isAnagram(firstString, secondString) {
  var newFirst = '';
  var newSecond = '';

  for (var i = 0; i < firstString.length; i++) {
    if (firstString.charAt(i) !== ' ') {
      newFirst += firstString.charAt(i);
    }
  }
  for (var v = 0; v < secondString.length; v++) {
    if (secondString.charAt(v) !== ' ') {
      newSecond += secondString.charAt(v);
    }
  }

  var matchFirst = '';
  var matchSecond = '';

  for (var f = 0; f < newFirst.length; f++) {
    matchFirst += newFirst.charAt(f);
    for (var s = 0; s < newSecond.length; s++) {
      if (newFirst.charAt(f) === newSecond.charAt(s)) {
        matchSecond += newSecond.charAt(s);
        if (s === 0) {
          newSecond = newSecond.substr(1);
        } else {
          newSecond = newSecond.substr(0, s) + newSecond.substr(s + 1);
        }
        break;
      }
    }
  }

  if (matchFirst === matchSecond && newSecond.length === 0) {
    return true;
  } else {
    return false;
  }
}
