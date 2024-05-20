const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Get the file path from the command line arguments
    const filePath = process.argv[2];



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
