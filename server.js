const http = require("http"); // package import 

const port = 8081; //local port number

const todolist = ["Complete Node Bytes", "Play Cricket"]

http
    .createServer((request, response) => {
        const {method, url } = request;

        if (url == "/todo") {
            if(method == "GET") {
                response.writeHead(200, {'Content-Type': "text/html"});
                response.write(todolist.toString());
            } else if( method === "POST"){
                let body = "";
                request.on("error",(err) => {
                    console.error(err);
                })
                .on("data",(chunk) => {
                    body += chunk;
                    console.log(chunk);
                })
                .on("end", () =>{
                    body = JSON.parse(body);
                    console.log("data:", body);
                });
            } else{
                response.writeHead(501);
            }
        } else{
            response.writeHead(404);
        }

        response.end();
    })

    .listen(port, () => {
	    console.log(`Nodejs server on port ${port}`);
    });

    // http:localhost:8081
