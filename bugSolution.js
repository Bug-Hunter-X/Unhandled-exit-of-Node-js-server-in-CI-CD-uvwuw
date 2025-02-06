const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle SIGINT (Ctrl+C) to gracefully shut down the server
process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

server.listen(8080);
console.log('Server is running on port 8080');