const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')

const http = require('http')

http.createServer((req, res) => {
        if(req.url === "/request"){
            apiCallFromRequest.callApi(function(response){
                //console.log(JSON.stringify(response));
                res.write(JSON.stringify(response));
                res.end();
            });
        }
        else if(req.url === "/users"){
            apiCallFromNode.callApi(function(response){
                //var user = users["user" + req.params.id] 
                //console.log( user );
                res.write(response);
                res.end();
            });
        }
        
        // res.end();
}).listen(3000);

console.log("service running on 3000 port....");