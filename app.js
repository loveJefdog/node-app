
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const index_page=fs.readFileSync('./index.ejs','utf8')

let server = http.createServer(getFromClient);

server.listen(8000);
console.log('server start!!');


function getFromClient(request,response){
    var content = ejs.render(index_page,{
            title: "Indexページ",
            content:"これはテンプレートを使ったサンプルページです．",
    });
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write(content);
    response.end();
};




