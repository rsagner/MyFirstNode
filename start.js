var http = require('http');
var url = require('url');

var myHttpServer = http.createServer(function (request, response) {
  



var urlen = request.url;
var path = url.parse(urlen).pathname;

//google url
switch(path) {

	case "/google":

	http.get("http://www.google.se/", function(res){}).on('response',function (feed) {

	response.writeHead(200, {'Content-Type': 'text/html'});

	feed.on('data', function (chunk) {

	response.write(chunk);
	
	});

	feed.on('end', function () {

	response.end();
	
	});


	});

	break;
	
//other url
default:


response.writeHead(200, {'Content-Type': 'text/plain'});

var myRtnData_j = {'test': 123};

  response.write(JSON.stringify(myRtnData_j));
  response.end('Hello! My name is Passim! The path could not be found\nMethod:'+request.method+'\nUrl: '+urlen +'\nPath: '+path);


break;
} //end (switch(path))



});


myHttpServer.listen(8125);


console.log('Server running at http://127.0.0.1:8125/');

