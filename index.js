const http = require('http');
const fs = require('fs').promises;
const PORT = 3000;
const users = [];
const routerGET = {
  '/': './views/index.html',
  '/about': './views/about.html',
  '/contact': './views/contact.html',
};
const requestListener = async (req, res) => {
  const { method, url } = req;
  if (method === 'GET') {
    for (const path in router) {
      if (url === path) {
        const data = await fs.readFile(routerGET[path], 'utf8');
        return res.end(data);
      }
    }
  }
  if (method === 'POST') {
    if (url === '/users') {
      let jsonStr = '';
      req.on('data', (chunk) => {
        jsonStr += chunk;
      });
      req.on('end', () => {
        const user = JSON.parse(jsonStr);
        delete user.password;
        user.id = Date.now();
        users.push(user);
        console.log(users);
        res.end(JSON.stringify(user));
      });
      return;
    }
  }

  const data = await fs.readFile('./views/404.html', 'utf8');
  res.end(data);
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log('server start at port ' + PORT);
});
