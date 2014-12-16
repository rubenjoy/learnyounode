var fs = require('fs')

// first arg is file to read

var buff = fs.readFileSync(process.argv[2])
var str = buff.toString()
var arr_str = str.split('\n')

//for(var i=0;i<arr_str.length;i++){
	//console.log(arr_str[i])
//}

// print number of line
console.log(arr_str.length-1)
// this the end of file
