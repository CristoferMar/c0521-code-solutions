const add = require('./add');
const subtract = require('./subtract');
const multipy = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'plus') {
  console.log(add(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else if (process.argv[3] === 'minus') {
  console.log(subtract(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else if (process.argv[3] === 'times') {
  console.log(multipy(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else if (process.argv[3] === 'over') {
  console.log(divide(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else {
  console.log('please use any one of the following keywords: "plus", "minus", "times", "over"');
}
