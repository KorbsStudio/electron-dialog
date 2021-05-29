const {app, dialog, BrowserWindow} = require('electron')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 250,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: false,
      enableRemoteModule: true,
      nodeIntegration: true
    }
  })
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {createWindow()})