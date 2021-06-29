const express = require('express');
const fs = require('fs');
const data = require('./data');
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesList = [];
  for (const key in data.notes) {
    notesList.push(data.notes[key]);
  }
  res.status(200).json(notesList);
});

app.get('/api/notes/:id', (req, res) => {
  const ID = parseInt(req.params.id);
  if (!(ID.toString().length === req.params.id.length && ID > 0)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[ID]) {
    res.status(200).json(data.notes[ID]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${ID}` });
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    data.notes[data.nextId] = { id: data.nextId, content: req.body.content };
    data.nextId++;
    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJSON, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const ID = parseInt(req.params.id);
  if (!(ID.toString().length === req.params.id.length && ID > 0)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[ID]) {
    res.status(404).json({ error: `cannot find note with id ${ID}` });
  } else {
    delete data.notes[ID];
    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJSON, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const ID = parseInt(req.params.id);
  if (!(ID.toString().length === req.params.id.length && ID > 0)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[ID]) {
    res.status(404).json({ error: `cannot find note with id ${ID}` });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    data.notes[ID] = req.body;
    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJSON, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(req.body);
      }
    });
  }
});

app.listen(3000, () => console.log('we\'re live on 3000'));
