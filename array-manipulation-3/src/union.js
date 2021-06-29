/* exported union */

// sorry Cody, I did the psudo coding for this. But with the git issues that arose, it all got deleted
// so I'm redoing this assignment but just gonna code it this time around. My appologies

function union(first, second) {
  var united = first;
  for (var s = 0; s < second.length; s++) {
    var push = true;
    for (var i = 0; i < first.length; i++) {
      if (second[s] === first[i]) {
        push = false;
        break;
      }
    }
    if (push === true) {
      united.push(second[s]);
    }
  }
  return united;
}
