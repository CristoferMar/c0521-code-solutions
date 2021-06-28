const express = require('express');
const app = express();
const allGrades = [];
let grades = {};
let nextId = 1;

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(allGrades);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  allGrades.push(grades);
  grades = {};
  res.status(201).send(allGrades);
});

app.listen(3000, () => {
  console.log('We are live on 3000');
});
