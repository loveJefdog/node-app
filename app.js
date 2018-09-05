
const http = require('http');

let server = http.createServer(
    (req,res)=>{
        res.setHeader('Content-Type', 'text/html');
        res.write('<!DOCTYPE html><html lang="ja">');
        res.write('<head><meta charset="UTF-8">');
        res.write('<title>Hello</title></head>');
        res.write('<body><h1>Hello</h1>');
        res.write('<p>This is Node.js sample page.</p>');
        res.write('<p>これは，Node.jsのサンプルページです．</p>');
        res.write('</body></html>');
        res.end();
    }
);

server.listen(8000);
console.log('server start!!');

