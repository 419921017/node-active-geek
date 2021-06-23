const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === 'favicon.ico') {
      res.writeHead(200);
      res.end();
      return;
    }
    res.writeHead(200);
    // res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    // res.end('hello');
  })
  .listen(8088);
