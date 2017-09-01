// httpモジュールを読み込む
const http = require('http');

// サーバーにアクセスがあったときの処理
function handler(req, res) {
  // httpヘッダーを出力
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // レスポンスの本体を出力
  res.end('<h1>Hello world!</h1>');
}

// Webサーバー実行
const svr = http.createServer(handler);
svr.listen(8000);
