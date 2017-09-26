// Activate the Express
const express = require('express');
const app = express();

// multerの準備
const multer = require('multer');
const path = require('path');

// アップロード場所を指定
// **__dirnameがよくわからないから調べる**
const tmpDir = path.join(__dirname, 'tmp');
const pubDir = path.join(__dirname, 'pub');
const uploader = multer({ dest: tmpDir });

app.listen(3000, () => {
  console.log(__dirname);
  console.log('起動しました - http:localhost:3000');
});

// アップロードフォームを表示
app.get('/', (req, res) => {
  res.send(
    '<form method="POST" action="/" encType="multipart/form-data">' +
    '<input type="file" name="aFile" /><br />' +
    '<input type="submit" value="アップロード">' +
    '</form>');
});
// 静的ファイルは自動的に返す
app.use('/pub', express.static(pubDir));
// アップロードを受け付ける
app.post('/', uploader.single('aFile'), (req, res) => {
  console.log('ファイルを受け付けました。');
  console.log('オリジナルファイル名：', req.file.originalname);
  console.log('保存したパス：', req.file.path);
  // MIMEでファイル形式のチェック
  if (req.file.mimetype !== 'img/png') {
    res.send('png画像以外はアップロード出来ません');
    return
  };
// 本当にpngかどうかを判定する
const fname = req.file.filename + '.png';
const des = pubDir + '/' + 'fname';
const fs = require('fs');
fs.rename(req.file.path, des);
// HTMLを出力
res.send('ファイルを順しました<br />' +
    `<img src="/pub/${fname}" />`);
});
