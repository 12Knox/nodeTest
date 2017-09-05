const fs = require('fs')
// (1) a.txtの読み込み
fs.readFile('a.txt', 'utf-8', (err, data) => {
  console.log('a.txtを読み込みました', data)
  fs.readFile('b.txt', 'utf-8', (err, data) => {
    console.log('b.txtを読み込みました', data)
    fs.readFile('c.txt', 'utf-8', (err, data) => {
      console.log('c.txtを読み込みました', data)
    })
  })
})
