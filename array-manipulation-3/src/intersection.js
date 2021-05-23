/* exported intersection */

// sorry Cody, I did the psudo coding for this, and it was beautiful. But with the git issues that arose, it all got deleted
// so I'm redoing this assignment but just gonna code it this time around. My appologies

function intersection(first, second) {
  var matchArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var s = 0; s < second.length; s++) {
      if (first[i] === second[s]) {
        matchArray.push(first[i]);
        break;
      }
    }
  }
  return matchArray;
}
