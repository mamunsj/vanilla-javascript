
const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';
const myServer = http.createServer((req, res)=>{
    // res.end("<h1>My first ever made server is running successfully</h1>");
    res.writeHead(202,{'Content-Type':'text/html'});
    res.write("<h2>Yess You server works well</h2>");
    res.end();
})

myServer.listen( port, hostname, ()=>{
    console.log(
      `Your server is running at http://${hostname}:${port} `
    );
})
