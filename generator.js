const fs = require('fs');
// 非同期の処理を待って関数の続きを呼ぶ関数

function readGfn(g, fname) {
  fs.readFile(fname, 'utf-8', (error, data) => {
    g.next(data);
  });
}

// Generator関数を定義
const g = (function *() {
    const a = yield readGfn(g, 'a.txt');
    console.log(a);
    const b = yield readGfn(g, 'b.txt');
    console.log(b);
    const c = yield readGfn(g, 'c.txt');
    console.log(c);
})()
g.next();
