const fs = require('fs');

const fileSelect = pathWay => {
  fs.readFile(pathWay, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

fileSelect(process.argv[2]);
