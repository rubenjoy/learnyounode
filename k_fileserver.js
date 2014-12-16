var http = require('http')
var fs = require('fs')

var filename = process.argv[3]
var port = process.argv[2]

var server = http.createServer(function (request,response) {
	//response.end('hello')
	fs.createReadStream(filename).pipe(response)
})
server.listen(port)
