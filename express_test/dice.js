const express = require('express');
const app = express();
const portNum = 3000;

// URLに応じた処理を走らせる
// ルートへのアクセス
app.get('/', (req, res) => {
  res.send(
    '<p><a href="/dice/6">6面体のサイコロ</a><br />' +
    '<a href="/dice/12">12面体のサイコロ</a></p>');
});
// サイコロへアクセス
app.get('/dice/6', (req, res) => {
  res.send('今回の値は...' + dice(6));
});
app.get('/dice/12', (req, res) => {
  res.send('今回の値は...' + dice(12));
});
  function dice(n) {
    return Math.floor(Math.random() * n) + 1;
  }

// 待ち受ける
app.listen(portNum, () => {
  console.log('起動しました', `http://localhost:${portNum}`);
});
