const express = require('express');
const app = express();

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// });

app.use((req, res) => {
  res.send('Welcome to my server. I have nothing for you. I think you should go.');
});

app.listen(3000, () => {
  console.log('We are live on port 3000');
});
