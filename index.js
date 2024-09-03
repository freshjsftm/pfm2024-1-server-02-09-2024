const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  // console.log('req', req);
  // console.log('res', res);
  res.end('hello from server!');
});

server.listen(PORT, () => {
  console.log('server start at port ' + PORT);
});
