var fs = require('fs')

// first arg is file to read

fs.readFile(process.argv[2],function (err,buff){

	var str = buff.toString()
	var arr_str = str.split('\n')		
	
	// print number of line
	console.log(arr_str.length-1)
})

// this the end of file
