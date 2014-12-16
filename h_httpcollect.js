var http = require('http')
var url = process.argv[2]

// ambil semua data dari server
// di akhir dicetak hanya dalam dua baris
// baris pertama integer representing the number of characters receiverd from the server
// baris kerdua complete string sent by server

http.get(url, function(response) {
	var tmp = ''
	response.setEncoding('utf8')
	response.on('error',console.error)
	response.on('data',function (chunk){
		tmp += chunk
	})
	response.on('end',function (dummy){
		console.log(tmp.length)
		console.log(tmp)
	})
})
