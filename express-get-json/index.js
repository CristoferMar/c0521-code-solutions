const express = require('express');
const app = express();
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const arrayGrade = [];
  for (const key in grades) {
    arrayGrade.push(grades[key]);
  }
  res.json(arrayGrade);
});

app.listen(3000, () => {
  console.log("we're live on 3000");
});
