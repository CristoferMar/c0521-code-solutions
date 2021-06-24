const fs = require('fs');

let i = 2;
let fullData = '';

while (process.argv[i]) {
  const fileSelect = process.argv[i] => {
    fs.readFile(pathWay, 'utf-8', (err, data) => {
      if (err) throw err;
      fullData += data;

      if (!process.argv[i]) {
        console.log(fullData);
      }
    });
  };

}
// we might need an 'ignition' function, which runs the item again, called from inside of the "load"

fileSelect(process.argv[2]);
console.log(process.argv[3]);
