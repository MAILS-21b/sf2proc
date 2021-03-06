const electron = require("electron");

const { app, BrowserWindow, globalShortcut } = electron;
const ipc = electron.ipcMain
const Menu = electron.Menu
var child_process = require('child_process');

let win;

function createWindow () {
  if(process.platform == "darwin"){
    win = new BrowserWindow({
      width: 1200,
      height: 720,
      minWidth: 640,
      minHeight: 480,
      titleBarStyle: 'hiddenInset',
      webPreferences: {
        nodeIntegration: true
    }
     })
  }
  else
  {
    win = new BrowserWindow({
      width: 1200,
      height: 720,
      minWidth: 640,
      minHeight: 480,
      frame:true,
      webPreferences: {
      nodeIntegration: true
    }
     })
  }

  globalShortcut.register('CommandOrControl+q', () => {
    app.quit();
  })

  win.loadFile('mainWindow.html')
  win.webContents.openDevTools()


}

app.on("ready", function() {
  createWindow();


  //create Menu
  const template = [
    {
      label: ""
    },
    {
      label: "File",
      submenu:[
        {
          label: "New File",
          click () { win.webContents.send("newfile"); }
        },
        {
          label: "New Project",
          click ()
          {
            //New Project --- Puma
            console.log("ez");
          }
        },
        {
          label: "Open Project",
          click ()
          {
            //Open Project --- Puma
            console.log("open project");
            win.webContents.send("load");
          }
        },
        {
          label: "Save Project",
          click ()
          {
            //Open Save --- Puma
            console.log("save project");
          }
        },
        {
          label: "Save as.."
        },
        {
          label: "Export Application",
          click ()
          {
            //Export app
            console.log("export app");
          }
        }
      ]
    },
    {
      label: "Edit",
      submenu:[
        {
          label: "Undo"
        },
        {
          label: "Redo"
        },
        {
          label: "Cut"
        },
        {
          label: "Copy"
        },
        {
          label: "Paste"
        },
        {
          label: "Find"
        }
      ]
    },
    {
      label: "Project",
      submenu:[
        {
          label: "Compile",
          click()
          {
            compileCode();
          }
        },
        {
          label: "Run",
          click()
          {
            runCode();
          }
        },
        {
          label: "Compile and Run",
          click()
          {
            compileCode();
            runCode();
          }
        },
        {
          label: "Stop"
        }
      ]
    },
    {
      label: "Help",
      submenu:[
        {
          label: "About"
        },
        {
          label: "Getting Started"
        },
        {
          label: "Github WebPage"
        }
      ]
    }
  ]

  const mainMenu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(mainMenu);  

  //load project directory
  

})


app.on('window-all-closed', () => {
  app.quit();
})

//Getting Button events from index.js and MainWindow.html
ipc.on("run-Button-Clicked",function(event){
  runCode();
})

ipc.on("stop-Button-Clicked",function(event)
{
  stopProgram();
})


function runCode()
{
  compileCode();
  runProgram();
}

function compileCode()
{
  if(process.platform == "darwin")
  {
    //mac code
    child_process.execSync("g++ -framework sfml-window -framework sfml-graphics -framework sfml-system *.cpp -o program.app -std=c++17");
  }else if(process.platform == "win32")
  {
    //windows code
  }
  else if(process.platform == "linux")
  {
    //linux code
    child_process.execSync("g++ *.cpp -o program -lsfml-graphics -lsfml-window -lsfml-system -std=c++17");
  }
  
}

function runProgram()
{
  if(process.platform == "darwin")
  {
    //mac code
    const program = child_process.spawn("./program.app");

    program.stdout.on('data', (data) => {
      process.stdout.write(data.toString());
    });

    program.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    program.on('exit', (code) => {
      console.log(`Child exited with code ${code}`);
    });
  }
  else if(process.platform == "linux")
  {
    //linux
    const program = child_process.exec("./program");

    program.stdout.on('data', (data) => {
      process.stdout.write(data.toString());
    });

    program.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    program.on('exit', (code) => {
      console.log(`Child exited with code ${code}`);
    });
  }
  else
  {
    //windows code
    const program = child_process.exec("start program.exe");

    program.stdout.on('data', (data) => {
      process.stdout.write(data.toString());
    });

    program.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    program.on('exit', (code) => {
      console.log(`Child exited with code ${code}`);
    });
  }
}

function stopProgram()
{

}






