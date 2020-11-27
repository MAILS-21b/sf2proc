const path = require("path");


ipc.on("newfile",function(){
	createNewFile();
}) 

ipc.on("load", function(){
	console.log("ez");
	loadTab();
})