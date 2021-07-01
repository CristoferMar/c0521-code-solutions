const takeAChance = require('./take-a-chance');

const coinFlip = takeAChance('Cris');

coinFlip.then(value => {
  console.log(value);
});

coinFlip.catch(err => {
  console.error(err.toString());
});
