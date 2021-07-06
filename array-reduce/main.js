const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((runningTotal, currentNum) => runningTotal + currentNum);
console.log('sum of nums:', sum);

const product = numbers.reduce((runningTotal, currentNum) => runningTotal * currentNum);
console.log('product of nums:', product);

const tab = (runningTotal, currentObj) => {
  if (currentObj.type === 'deposit') {
    return runningTotal + currentObj.amount;
  } else {
    return runningTotal - currentObj.amount;
  }
};
const balance = account.reduce(tab, 0);
console.log('total balance:', balance);

const traitStack = (runningTraits, currentObj, index, traits) => {
  for (const prop in currentObj) {
    runningTraits[prop] = currentObj[prop];
  }
  return runningTraits;
};
const composite = traits.reduce(traitStack);
console.log('composite traits:', composite);
