// first argument pathname
// second argument extension filter

var fs = require('fs')
var path = process.argv[2]
var ext = process.argv[3]
var pattern = '.*\\.'+ext+'$'
//console.log(pattern)
var re = new RegExp(pattern)

fs.readdir(path, function (err,list) {
		for(x in list) {
			var file = list[x]
			//console.log(file)
			//var str = file.match(/.*\.js$/)
			//console.log(str)
			if(file.toString().match(re))
				console.log(file)
		}
})
