// Math object
var one = 1;
var two = 2;
var three = 3;

var maximumValue = Math.max(one, two, three);
console.log('max value:', maximumValue);

var heroes = ['batman', 'deadpool', 'one-punch man', 'hulk'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('random index:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('random hero:', randomHero);

// array methods

var library = [
  { title: 'I Have Lived A Thousand Years', author: 'Livia Bitton-Jackson' },
  { title: 'Tick Tock', author: 'Dean Koontz' },
  { title: 'Lord Loss', author: 'Darren Shan' }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log(library);

// string methods
var fullName = 'Cristofer Martinez';

var firstAndLastName = fullName.split(' ');
console.log('array firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
