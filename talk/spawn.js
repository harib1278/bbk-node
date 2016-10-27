var spawn = require('child_process').spawn;

var cp = spawn("node", ["alwaysTalkingj"]);

cp.stdout.on("data", function(data){
	console.log(`STDOUT: ${data.toString()}`);
});

cp.on("close", function(){
	console.log("child process has ended");

	process.exit();
});

setTimeout(function(){

	cp.stdin.write("dfgdfgdfg");

}, 4000);