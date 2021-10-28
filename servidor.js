const http = require('http');
const host = 'http://localhost';
const port = 4000

http.createServer((req,res)=>{
    res.end(`<h1>It's Working</h1>`)
}).listen(port,()=>console.log(`Server is running in ${host}:${port}`))