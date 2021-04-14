const http = require('http');
const os = require("os");

const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from \'node.js\', server is running on ['+os.hostname().toLowerCase()+']...');
});

server.listen(port, () => {
  console.log('Server running at '+os.hostname().toLowerCase()+'');
});
