const http = require("http"); // package import 

const port = 8081; //local port number

http
    .createServer((request, response) => {
        //call back function
	    response.writeHead(200,{"Content-Type" : "text/html"});
        response.write("<h1>Hello, this is from my server</h1>");
    	response.end();
    })

    .listen(port, () => {
	    console.log(`Nodejs server on port ${port}`);
    });

    // http:localhost:8081
