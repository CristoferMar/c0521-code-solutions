const express = require('express');
const pg = require('pg');
const app = express();

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = 'select * from "grades"';
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      if (!grades) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(grades);
      }
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.get('/api/grades/:gradeId', (req, res) => {
  if (!(req.params.gradeId)) {
    res.status(400).json({ error: 'gradeId is a required fields' });
    return;
  }
  const gradeId = parseInt(req.params.gradeId);
  if (!(gradeId.toString().length === req.params.gradeId.length && gradeId > 0)) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  }

  const sql = `
      select *
      from "grades"
      where "gradeId" = $1
      `;
  const params = [req.params.gradeId];
  db.query(sql, params)
    .then(result => {
      const studentGrade = result.rows[0];
      if (!studentGrade) {
        res.status(404).json({ error: `cannot find grade with id ${gradeId}` });
      } else {
        res.status(200).json(studentGrade);
      }
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  if (!(req.body.name && req.body.course && req.body.score)) {
    res.status(400).json({ error: 'content, course, & score are all required fields' });
    return;
  }
  const score = parseInt(req.body.score);
  if (!(score.toString().length === req.body.score.length && score > 0)) {
    res.status(400).json({ error: 'score must be a positive integer' });
    return;
  }

  const sql = `
      insert into
      "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
      `;
  const params = [req.body.name, req.body.course, req.body.score];

  db.query(sql, params)
    .then(result => {
      const studentGrade = result.rows[0];
      if (!studentGrade) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(studentGrade);
      }
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  if (!(req.body.name && req.body.course && req.body.score)) {
    res.status(400).json({ error: 'name, course, & score are required fields' });
    return;
  }
  const gradeId = parseInt(req.params.gradeId);
  const score = parseInt(req.body.score);
  if (!((score.toString().length === req.body.score.length && score > 0) &&
  (gradeId.toString().length === req.params.gradeId.length && gradeId > 0))) {
    res.status(400).json({ error: 'gradeId & score must be a positive integers' });
    return;
  }

  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  returning *
  `;
  const params = [req.body.name, req.body.course, req.body.score, req.params.gradeId];
  db.query(sql, params)
    .then(result => {
      const studentGrade = result.rows[0];
      if (!studentGrade) {
        res.status(404).json({ error: `cannot find grade with id ${gradeId}` });
      } else {
        res.status(200).json(studentGrade);
      }
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  if (!(gradeId.toString().length === req.params.gradeId.length && gradeId > 0)) {
    res.status(400).json({ error: 'gradeId must be a positive integers' });
    return;
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      if (result.rowCount < 1) {
        res.status(404).json({ error: `cannot find grade with id ${gradeId}` });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => console.log("We're live on 3000"));
