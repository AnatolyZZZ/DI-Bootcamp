const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.setHeader('Content-Type','text/html');
    res.write("<p>First respond<p>");
    res.write("<p>Second respond<p>");
    res.end("<p>My third one</p>");
    console.log("Im listening 3000");
})
server.listen(3000);

const server2 = http.createServer((req, res) => {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.writeHead(200, {'Content-Type' : "application/json"});
    res.end(JSON.stringify(user));
} 
)
server2.listen(8080);