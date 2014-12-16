var http = require('http')
var url = process.argv[2]

//console.log(url)

var response = http.get(url, function(res) {
		//console.log('get response: ',res.statusCode)
		
		res.on('data',function (chunk) {
				console.log(chunk.toString());
			})
	}).on('error',function(e) {
		console.log('error: '+e.message)
	})
