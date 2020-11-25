var editor = ace.edit("editor");

$(window).bind("keydown", function (event) { 

    if (event.metaKey || event.controlKey) { 

        switch (String.fromCharCode(event.which).toLowerCase()) { 

            case 'v':
                event.preventDefault();
                console.log("paste");
                pasteFile();
                break;
            case 'c':
            	event.preventDefault();
                console.log("copy");
                copySelected();
                break;
            case 'x':
            	event.preventDefault();
                console.log("copy");
                cutSelected();
                break;
            case 'n':
                event.preventDefault();
                createNewFile();
                break;
        }
    }
}) 


async function pasteFile()
{
	const text = await navigator.clipboard.readText();
	editor.insert(text);
}

function copySelected()
{
	const text = editor.getSelectedText();
	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text);
		return;
	}
	navigator.clipboard.writeText(text).then(function() {
		console.log('Async: Copying to clipboard was successful!');
	}, function(err) {
		console.error('Async: Could not copy text: ', err);
	});
}

function cutSelected()
{
	const text = editor.getSelectedText();
	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text);
		return;
	}
	navigator.clipboard.writeText(text).then(function() {
		console.log('Async: Copying to clipboard was successful!');
	}, function(err) {
		console.error('Async: Could not copy text: ', err);
	});
}

function createNewFile()
{
	console.log("create New Tab");
	createNewTab();
}