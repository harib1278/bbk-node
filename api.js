var http = require("http");
var data = require("./data/inventory");

var server = http.createServer(function (req, res){ 

	if(req.url === "/"){
		
		res.writeHead(200, {"Content-Type" : "text/json"});
		res.end(JSON.stringify(data));

	} else if(req.url === "/instock") {
		listInStock(res);

	} else if(req.url === "/onorder"){
		listOnBackOrder(res);

	} else if(req.url === "/sku"){
		listOnBackOrder(res);

	} else {
		res.writeHead(404, {"Content-Type" : "text/plain"});
		res.end("404 data not found");
	}	

}).listen(3000);

console.log("Server is running ....");

function listInStock(res){
	var inStock = data.filter(function(item){
		return item.avail === "In stock";
	});
	res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res){
	var onOrder = data.filter(function(item){
		return item.avail === "On back order";
	});
	res.end(JSON.stringify(onOrder));
}

function listSKU(res){
	var onOrder = data.filter(function(item){
		return item.sku === "KE250";
	});
	res.end(JSON.stringify(onOrder));
}