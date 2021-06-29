const express = require('express');
const app = express();
<<<<<<< HEAD
const grades = {};
=======
let grades = {};
const allGrades = [];
>>>>>>> origin/master
let nextId = 1;

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const allGrades = [];
  let tempObject = {};
  for (const key in grades) {
    tempObject[key] = grades[key];
    allGrades.push(tempObject);
    tempObject = {};
  }
  res.json(allGrades);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  console.log('We are live on 3000');
});
