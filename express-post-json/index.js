const express = require('express');
const app = express();
let grades = {};
let nextId = 1;

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  nextId++;
  grades = req.body;
  res.status(201).send(grades);
});

app.listen(3000, () => {
  console.log('We are live on 3000');
});
