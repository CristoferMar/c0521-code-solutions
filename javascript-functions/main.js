function convertMinutesToSeconds(minutes) {
  var totSeconds = minutes * 60;
  return totSeconds;
}
var secondsfromMins = convertMinutesToSeconds(5);
console.log('Minutes to Seconds:', secondsfromMins);

function greet(name) {
  var $greeting = 'Hey, ' + name;
  return $greeting;
}
var greeting = greet('Beavis');
console.log('Greeting:', greeting);

function getArea(width, height) {
  var totalArea = width * height;
  return totalArea;
}
var area = getArea(17, 42);
console.log('Area:', area);

function getFirstName(person) {
  var first = person.firstName;
  return first;
}
var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log(firstName);

function getLastElement(array) {
  var $lastItem = array[array.length - 1];
  return $lastItem;
}
var lastItem = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(lastItem);
