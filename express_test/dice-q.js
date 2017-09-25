const express = require('express');
const app = express();
const portNum = 3000;

app.get('/', (req, res) => {
  if (!req.query.q) {
    res.send(
      '<p><a href="/dice/6">6面体のサイコロ</a><br />' +
      '<a href="/dice/12">12面体のサイコロ</a></p>');
  } else {
    const q = parseInt(req.query.q, 10);
  }
});

