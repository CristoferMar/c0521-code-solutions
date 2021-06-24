const fs = require('fs');

const duplicateFile = (orginal, copy) => {
  fs.readFile(orginal, 'utf-8', (err, data) => {
    if (err) throw err;
    fs.writeFile(copy, data, err => {
      if (err) throw err;
    });
  });
};

duplicateFile(process.argv[2], process.argv[3]);
