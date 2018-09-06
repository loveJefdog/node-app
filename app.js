
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

const index_page=fs.readFileSync('./index.ejs','utf8');
const other_page=fs.readFileSync('./other.ejs','utf8');
const style_css=fs.readFileSync('./style.css','utf8');

let server = http.createServer(getFromClient);

server.listen(8000);
console.log('server start!!');


function getFromClient(request,response){

    var url_parts=url.parse(request.url,true);
    
    switch(url_parts.pathname){
        case '/':
            var content = "これはIndexページです";
           // var query = url_parts.query;
            if(url_parts.query.msg != undefined){
                var query_obj = 
                content += "あなたは，「"+url_parts.query.msg+"」と送りました．";
            }
            var content = ejs.render(index_page,{
            title: "Index",
            content: query_obj,
            });
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.write(content);
            response.end();
            break;

        case '/other':
            var content = ejs.render(other_page,{
                title:"Other",
                content:"これは新しく用意したページです",
            })
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.write(content);
            response.end();
            break;

        case '/style.css':
            response.writeHead(200,{'Content-Type': 'text/css'});
            response.write(style_css);
            response.end();
            break;
        
        defalt:
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.end('no page ...');
            break;

    }
   
};




