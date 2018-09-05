
const http = require('http');

let server = http.createServer(
    (req,res)=>{
        res.end('<html><body><h1>Hello</h1><p>welcome to Node.js</p></body></html>');
    }
);

server.listen(8000);

