// JSON Date Time HTTP server
// reply http request with 
// first endpoint
// request example:
//		/api/parsetime?iso=2013-08-10T12:10:15.474Z
//		/api/unixtime
// response example:
//		{
//			"hour": 14,
//			"minute": 23,
//			"second": 15
//		}
//		{
//			"unixtime": 1376136615474
//		}
//
//	url.parse
// 	JSON.stringify()
// 	date.toISOString()
//	Date#getTime()

var http = require('http')
var url = require('url')

var port = +process.argv[2]
if(isNaN(port)) {
	console.error('port is missing')
	process.exit(-1)
}

var server = http.createServer(function(request,response){
		var parse = url.parse(request.url,true)
		var date = new Date(parse.query.iso)
		//console.log(parse.query.iso)
		
		response.writeHead(200,{'Content-Type': 'application/json'})		
		if(parse.pathname === '/api/parsetime') {
			response.write('{'+'\n'
						+ '"hour": '+date.getHours()+',\n'
						+ '"minute": '+date.getMinutes()+',\n'
						+ '"second": '+date.getSeconds()+'\n'
						+ '}')
		}else if(parse.pathname === '/api/unixtime') {
			response.write('{'+'\n'
						+ '"unixtime": '+date.getTime()+'\n'
						+ '}')
		}
		response.end('\n')
	})

server.listen(port)
