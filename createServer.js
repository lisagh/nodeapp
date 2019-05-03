const http = require('http');

//create a server object
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('I am the data from your created server! cheers!'); // write a response to the client
        res.end(); //end the response
    }
});

//event emitter is listening to port 3000
server.listen(3000);

console.log(
    "listening port 3000..."
);
