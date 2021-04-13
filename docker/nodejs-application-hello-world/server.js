const http = require('http');

const port = 8081;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from NodeJs, server is running...');
});

server.listen(port, () => {
  console.log('Server running at http://${HOSTNAME}/');
});
