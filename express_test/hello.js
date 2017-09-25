const express = require('express');
const app = express()
const portNum = 3000;

// アクセスがあった場合
app.get('/', (req, res, next) => {
  res.send('Hello world!');
});

// サーバー起動
app.listen(portNum, () => {
  console.log('Port has been activated.', `http://localohost:${portNum}`);
});
