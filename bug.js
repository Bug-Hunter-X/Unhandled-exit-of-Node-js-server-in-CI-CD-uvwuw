const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The above code will run indefinitely and will not exit unless manually stopped. This can lead to issues when running scripts in environments where process termination is important.
//This is especially problematic in situations like CI/CD pipelines where your server needs to shut down gracefully after testing to free resources and avoid unnecessary costs.