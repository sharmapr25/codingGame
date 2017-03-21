var http = require('http');
var fs = require('fs');
var data = fs.readFileSync('./hello.txt','utf-8').split("\n");

var readGivenFile = function(path, res){
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

var handler = function(req, res){
	if(req.url == '/data'){
		data.sort(function(defib){return 0.5-Math.random()});
		var firstFiveDefib = data.slice(0,5);
		res.end(JSON.stringify(firstFiveDefib));
	}
	else{
		var path = '.'+req.url;
		readGivenFile(path, res);
	}
	
};

var server = http.createServer(handler);
server.listen(8009);
