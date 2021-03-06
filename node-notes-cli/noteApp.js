const data = require('./data');
const fs = require('fs');

const saveData = () => {
  const dataJSON = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', dataJSON, err => {
    if (err) throw err;
  });
};

const action = process.argv[2];

if (action === 'read') {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
} else if (action === 'create') {
  data.notes[data.nextId] = process.argv[3];
  data.nextId++;
  saveData();
} else if (action === 'update') {
  data.notes[process.argv[3]] = process.argv[4];
  saveData();
} else if (action === 'delete') {
  delete data.notes[process.argv[3]];
  saveData();
} else {
  console.log('Use any one of the following key words "read", "create", "update", or "delete"');
}
