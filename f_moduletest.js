//var mymodule = require('./mymodule.js')
var mymodule = require('./solution_filter.js')
var path = process.argv[2]
var ext = process.argv[3]
var print_counter = null//'yes'

mymodule(path,ext,function (err,data){
	//if(err) {
		//console.log(err)
		////process.exit(-1)
		//return
	//}
	
	var count = 0
	data.forEach(function (elmt) {
		if(print_counter) 
			console.log(count++ +': '+elmt)
		else
			console.log(elmt)
	})
})
