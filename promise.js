const fs = require('fs');

// Promiseを返す関数を定義
function readFilePr(fname) {
  return new Promise((resolve) => {
    fs.readFile(fname, 'utf-8', (error, s) => {
      resolve(s);
    });
  });
}

// 順番にテキストファイルを読み込む
readFilePr('a.txt')
.then((text) => {
    console.log('a.txtを読み込みました。');
    return readFilePr('b.txt');
})
.then((text) => {
    console.log('b.txtを読み込みました。');
    return readFilePr('c.txt');
})
.then((text) => {
    console.log('c.txtを読み込みました。');
});
