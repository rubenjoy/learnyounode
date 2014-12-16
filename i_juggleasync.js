var http = require('http')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var str1 = ''
var str2 = ''
var str3 = ''

var count = 0

http.get(url1, function(response) {
		response.setEncoding('utf8')
		response.on('error',console.error)
		response.on('data', function (chunk){
			str1 += chunk})
		response.on('end', function (dummy){
				http.get(url2, function(response) {
					response.setEncoding('utf8')
					response.on('error',console.error)
					response.on('data', function (chunk){
						str2 += chunk})
					response.on('end', function (dummy){
						http.get(url3, function(response) {
							response.setEncoding('utf8')
							response.on('error',console.error)
							response.on('data', function (chunk){
								str3 += chunk})
							response.on('end', function (dummy){
								console.log(str1)
								console.log(str2)
								console.log(str3)
							})
						})						
					})
				})
			})
	})
