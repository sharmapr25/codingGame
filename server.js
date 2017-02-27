var http = require('http');
var fs = require('fs');

var handler = function(req, res){
	var path = '.'+req.url;
	fs.readFile(path, function(error, content){
		if(error){
			res.statusCode = 404;
			res.end('File not found');
		}
		else{
			res.statusCode = 200;
			res.end(content, 'utf-8');
		}
	});
};

var server = http.createServer(handler);
server.listen(8009);
