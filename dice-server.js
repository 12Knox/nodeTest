const http = require('http');
const ctype = { 'Content-Type': 'text/html; charset=utf-8' };

// Web server activate
const svr = http.createServer(handler);
svr.listen(8000);

// Once the access founded
function handler(req, res) {
  // Judge URL
  const url = req.url
  // If toppage
  if (url === '/' || url === '/index.html') {
    showIndexPage(req, res);
    return;
  }
  if (url.substr(0, 6) === '/dice/') {
    showDicePage(req, res);
    return;
  }
  res.write(404, ctype);
  res.end('404 Not Found');
}

// If access founded on index page
function showIndexPage(req, res) {
  // Output header
  res.writeHead(200, ctype);
  // Responce the body
  const html = '<h1>サイコロページの案内</h1>\n' +
  '<p><a href="/dice/6">6面体サイコロ</a></p>' +
  '<p><a href="/dice/12">12面体サイコロ</a></p>';
  res.end(html);
}

// If access founded on dice page
function showDicePage(req, res) {
  
}
