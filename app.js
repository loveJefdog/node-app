
const http = require('http');

let server = http.createServer(
    (req,res)=>{
        res.end('Hello, node.js!');
    }
);

server.listen(8000);