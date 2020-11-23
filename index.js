const electron = require("electron");
const ipc = electron.ipcRenderer;


function onRunButtonClicked()
{
	var editor = ace.edit("editor");
	var text = editor.getValue();

	const fs = require('fs')
	function readWriteAsync() {
	  fs.readFile('main.cpp', 'utf-8', function(err, data){
	    if (err) throw err;

	    fs.writeFile('main.cpp', text, 'utf-8', function (err) {
	      if (err) throw err;
	      console.log('filelistAsync complete');
	    });
	  });
	}	
	readWriteAsync();
	ipc.send("run-Button-Clicked");
}

function onStopButtonClicked()
{
	console.log("stop");
	ipc.send("stop-Button-Clicked");
}

