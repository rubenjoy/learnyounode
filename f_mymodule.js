module.exports = function(path_arg,ext,callback) {
	
	// list file dari path lalu filter untuk file dengan ext
	//console.log('path: ' +path)
	//console.log('ext: ' +ext)
	
	var fs = require('fs')
	var path = require('path')
	
	// error message
	var err_pathNotExists = 'path not exists'
	var err_timeOut = ''
	var err_read = ''
	
	// data is an array
	var data = []
	
	// kalo di-uncomment verify ga lengkap, mgkn ditangkap dari callback readdir
	//if(!fs.existsSync(path_arg))
	//	return callback('path not exists',null)

	// early error return
	//if(err) return callback(err,null)
	
	fs.readdir(path_arg,function (err,list) {
		if(err)
			return callback(err)
		
		list.forEach(function (file) {
		if(path.extname(file) === '.'+ext)
			data[data.length] = file
		})
		callback(null,data)
	})
	
	
	// no error everything go smooth
}
