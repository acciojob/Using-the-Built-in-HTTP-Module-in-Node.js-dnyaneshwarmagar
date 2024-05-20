const http = require('http');
const fs = require('fs');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the request URL to extract the file path
  const parsedUrl = url.parse(req.url, true);
  const filePath = './output.txt';

  // If no file path is provided, send a 400 Bad Request response
  if (!filePath) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Error: No file path provided. Please specify a file path in the query parameter.');
    return;
  }

  // Read the file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If the file cannot be read, send a 404 Not Found response
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`Error: File not found at path "${filePath}". Please provide a valid file path.`);
      } else {
        // For other errors, send a 500 Internal Server Error response
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Error: Unable to read file at path "${filePath}".`);
      }
    } else {
      // If the file is read successfully, send a 200 OK response with the file contents
      if(data !== "Hello, World!"){
          res.writeHead(401, { 'Content-Type': 'text/plain' });
          res.end("Error: Invalid Content.")
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

// Start the server and listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
