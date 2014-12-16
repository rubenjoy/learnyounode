var http = require('http')
var port = +process.argv[2]

if(isNaN(port)) {
	console.error('port is not a number')
	process.exit(-1)
}

var verbose = true
function dumpMsg(msg){
	if(verbose)
		console.log(msg)
}

var server = http.createServer(function(request,response){
		var req_str = ''
	
		request.on('error',console.error)
		//request.on('data',console.log)
		request.on('data',function(chunk) {
			req_str += chunk.toString().toUpperCase()
		})
		request.on('end',function() {
			response.end(req_str)
			dumpMsg('request: '+req_str)
			dumpMsg('request end')
		})
		
		//response.end('hello\n')
	})

server.listen(port)
