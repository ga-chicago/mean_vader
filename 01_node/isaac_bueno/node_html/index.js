var http = require ('http');
var fs = require('fs') //file system access

var html = fs.readFileSync('./index.html');


http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(html);
  response.end();
  //this tells other applications-- hey were done.-- response.end()
}).listen(5000);
console.log('HTML')