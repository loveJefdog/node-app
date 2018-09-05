
const http = require('http');
const fs = require('fs');
var request;
var response;

/*let server = http.createServer(
    (request,response)=>{
        fs.readFile('./index.html','UTF-8',
        (error,data)=>{
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        });
    }
);
*/

let server = http.createServer(getFromClient);

server.listen(8000);
console.log('server start!!');


function getFromClient(req,res){
    request = req;
    response = res;
    fs.readFile('./index.html','UTF-8',writeResponse);
};

function writeResponse(error,data){
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write(data);
    response.end();
};




