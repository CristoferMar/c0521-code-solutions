/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var fullIn = person.firstName.charAt(0) + person.lastName.charAt(0);
  return fullIn;
}
