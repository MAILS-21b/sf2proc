
var fileTabCount = 0;
var untitledTab = 0;

var editorId;

function loadTab()
{
	var editor = ace.edit("editor");
	var filename = "App.cpp"

	const fs = require('fs')
	function readWriteAsync() {
	  fs.readFile(filename, 'utf-8', function(err, data){
	    if (err) throw err;
	    editor.setValue(data);
	  });
	}	
	readWriteAsync();
}

function createNewTab()
{
	fileTabCount++;
	untitledTab++;
	$(".tabHolder").append("<button>Untitled Tab</button>");

	createNewCodeEditor(fileTabCount);
}


function createNewCodeEditor(tabNumber)
{
	editorId = "codeslate_" + tabNumber;

	var editorStyles = "position:relative;" +
        "top:0; right:0; bottom:90; left:0;" +
        "font-size:12pt; font-weight:normal; white-space:nowrap; z-index:999; grid-area: overlap;";

    var editorDesign = "<div class='codeslate' id='" + editorId + "' style='" + editorStyles + "'></div>";

    $(".mainSection").append(editorDesign);

	var editor = ace.edit(editorId);
    editor.setShowPrintMargin(false);
    editor.setTheme("ace/theme/mono_industrial");
    editor.session.setMode("ace/mode/c_cpp");
}

function push(theFileAddress){

	console.log("push function has worked");

	openedFiles.push(theFileAddress);
}

function pop(fileTabId){
	var fileToPop = $("#"+fileTabId).attr("fileaddress");
	var index = openedFiles.indexOf(fileToPop);

	openedFiles.splice(index,1);
	
}