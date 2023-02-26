const {lnm : large, current} = require('./main.js');
const b = 5;
console.log(large+b);

const http = require('http');
const server = http.createServer((req, res) => {
    console.log("I'm listening");
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hi there at the frontend</h1>');
})
server.listen(3000)

const server2 = http.createServer((rew, res) =>{
    res.setHeader('Content-Type','text/html');
    res.end(`The date and time currently ${current()}`);
})
server2.listen(8080)
