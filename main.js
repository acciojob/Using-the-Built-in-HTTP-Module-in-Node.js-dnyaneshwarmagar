const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Get the file path from the command line arguments
    const filePath = process.argv[2];

    // If no file path is provided, send a 400 Bad Request response
    if (!filePath) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Error: No file path provided. Please specify a file path as a command-line argument.');
        return;
    }

    // Read the file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {


            // If the file is read successfully and has the correct content, send a 200 OK response with the file contents
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
    })

});

// Start the server and listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
