const { app, BrowserWindow } = require('electron')

let child

function create(){
  win = new BrowserWindow({ width: 800, height: 600 })
  // and load the index.html of the app.
win.loadURL('file://' + __dirname + '/index.html');

}
app.on('ready', create)
