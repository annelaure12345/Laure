var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Return the url part of the request object:
  var htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>My First Node.js Server</title>
  </head>
  <body>
    <h1>Welcome to my Node.js Server!</h1>
    <p>This is a simple HTTP server.</p>
    <p>You requested the URL: ${req.url}</p>
  </body>
  </html>
`;
  res.write(htmlContent);
  res.end();
}).listen(8080);
 