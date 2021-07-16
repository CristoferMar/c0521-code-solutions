const express = require('express');
const path = require('path');
const app = express();

const absolutePath = path.join(__dirname, 'public');

const staticFile = app.use(express.static(absolutePath));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
