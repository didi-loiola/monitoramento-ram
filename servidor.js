const http = require('http');
const host = 'http://localhost';
const port = 4000
const status = require('./ramUsage.js')

http.createServer((req,res)=>{
    let url = req.url;

    if(url === '/status'){
        res.end(JSON.stringify(status, null,2));
    } else {
        res.end(`<h1>Bem vindo!</h1>`)
    }
}).listen(port,()=>console.log(`Server is running in ${host}:${port}`))