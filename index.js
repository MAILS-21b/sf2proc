const electron = require("electron");
const ipc = electron.ipcRenderer;


function onRunButtonClicked()
{
	var editor = ace.edit("editor");
	var text = editor.getValue();

	var filename = "App.cpp"

	const fs = require('fs')
	function readWriteAsync() {
	  fs.readFile(filename, 'utf-8', function(err, data){
	    if (err) throw err;

	    fs.writeFile(filename, text, 'utf-8', function (err) {
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
	ipc.send("stop-Button-Clicked");
}

