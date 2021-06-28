const express = require('express');
const app = express();
const allGrades = [];
const grades = {};
let nextId = 1;

app.use(express.json());

app.get('/api/grades', (req, res) => {
  let tempObject = {};
  for (const key in grades) {
    tempObject[key] = grades[key];
    allGrades.push(tempObject);
    tempObject = {};
  }
  res.json(allGrades);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201).json(grades);
});

app.listen(3000, () => {
  console.log('We are live on 3000');
});
