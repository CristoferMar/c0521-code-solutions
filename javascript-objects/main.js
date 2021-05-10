var student = {
  firstName: 'Cris',
  lastName: 'Martinez',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Financial Specialist';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'honda',
  model: 'civic',
  year: 2012
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'spike',
  type: 'dog'
};

delete pet.name;
delete pet.name;
console.log('value of pet:', pet);
