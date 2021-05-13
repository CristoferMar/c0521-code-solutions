/* exported getStudentNames */
function getStudentNames(students) {
  var rollCall = [];
  for (var i = 0; i < students.length; i++) {
    rollCall.push(students[i].name);
  }
  return rollCall;
}
