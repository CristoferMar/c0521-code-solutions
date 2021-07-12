const express = require('express');
const path = require('path');
const app = express();

const absolutePath = path.join(__dirname, 'public');

console.log(absolutePath);

const staticFile = app.use(express.static(absolutePath));

app.get('/', (req, res) => {
  res.status(200);
  res.send(staticFile);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
