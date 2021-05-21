var library = [
  {
    isbn: 123,
    title: 'Amazing Ants',
    author: 'Amy A'
  },
  {
    isbn: 456,
    title: 'Bewidering Beasts',
    author: 'Billy B'
  },
  {
    isbn: 789,
    title: 'Challenging Cheetas',
    author: 'Charly C'
  }
];

console.log('Library:', library);
console.log('Library Typeof:', typeof (library));

var stingLibrary = JSON.stringify(library);
console.log('stingLibrary:', stingLibrary);
console.log('stingLibrary Typeof:', typeof (library));

var student = '{"ID":1185,"name":"Jimmy John"}';
console.log('student in manual JSON format:', student);
console.log('student Typeof:', typeof (student));

var newStudent = JSON.parse(student);
console.log('newStudent:', newStudent);
console.log('newStudent Typeof:', typeof (newStudent));
