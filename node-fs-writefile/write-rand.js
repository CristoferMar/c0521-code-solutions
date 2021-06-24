const fs = require('fs');

const mix = () => { return Math.random().toString(); };

fs.writeFile('random.txt', mix(), err => {
  if (err) throw err;
});
