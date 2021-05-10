var colors = ['red', 'white', 'blue'];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

var america = colors[0] + ', ' + colors[1] + ', and ' + colors[2];

console.log('America is ' + america);

colors[2] = 'green';

var mexico = colors[0] + ', ' + colors[1] + ', and ' + colors[2];

console.log('Mexico is ' + mexico);
console.log('value of colors:', colors);

var students = ['Timmy', 'Taylor', 'Carlos', 'Sam'];
var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' studens in the class.');

var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];
console.log('The last student in the array is ' + lastStudent);

console.log('value of students:', students);
