// print waktu YYYY-MM-DD hh:mm
// tcp conn

var verbose = false
var port = Number(process.argv[2])
if(isNaN(port)) {
	console.log('port argument is not a number')
	process.exit(-1)
}

for(var i=0;i<process.argv.length;i++) {
	arg_str = process.argv[i]
	if(arg_str.match(/-verbose/))
		verbose = true
}

function writeMsg(msg) {
	if(verbose)
		console.log(msg)
}
writeMsg('verbose mode')

var net = require('net')
var server = net.createServer(function (socket){
		writeMsg('server connected')
		socket.on('end',function () {
			writeMsg('server disconnected')
		})
		//socket.write('hello\r\n')
		//socket.write(getMyDate())
		//socket.pipe(socket)
		socket.end(getMyDate())
	})

server.listen(port, function() {
		writeMsg('server bound')
	})
	
function getMyDate() {
	var date_str = ''
	var date = new Date()
	//console.log(date)
	//console.log(date.getMonth())

	// print waktu YYYY-MM-DD hh:mm	
	date_str += date.getFullYear()
	date_str += '-' + Number(date.getMonth()+1)//getMonth dapet beda -1
	date_str += '-' + date.getDate()
	date_str += ' ' + date.getHours()
	date_str += ':' + date.getMinutes()
	
	//console.log(date_str)
	
	return date_str
}
