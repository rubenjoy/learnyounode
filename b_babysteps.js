//console.log(process.argv)
var sum=0
for(var i=2;i<process.argv.length;i++){
		var num_arg=+process.argv[i]
		if(!isNaN(num_arg)) {
			sum=sum+num_arg
			continue
		}
		//console.log(process.argv[i] + 'is not anumber')
}
// print the sum
console.log(sum)

//var str = 'is string'
//console.log(str)

//var num = +str
//console.log(num)

//var num2 = Number(str)
//console.log(num2)
