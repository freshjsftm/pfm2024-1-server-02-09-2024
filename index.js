const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === 'GET') {
    if (url === '/') {
      fs.readFile('./views/index.html', { encoding: 'utf8' }, (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
      return;
    }
    if (url === '/about') {
      fs.readFile('./views/about.html', { encoding: 'utf8' }, (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
      return;
    }
    if (url === '/contact') {
      fs.readFile('./views/contact.html', { encoding: 'utf8' }, (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
      return;
    }
  }
  if(method === 'POST'){

  }
  fs.readFile('./views/404.html', { encoding: 'utf8' }, (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('server start at port ' + PORT);
});
