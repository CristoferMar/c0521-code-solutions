const express = require('express');
const app = express();
const grades = {};
let nextId = 1;

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201).send(grades);
});

app.listen(3000, () => {
  console.log('We are live on 3000');
});
