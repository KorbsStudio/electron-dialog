const {app, dialog, BrowserWindow, ipcMain, ipcRenderer} = require('electron')

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
  ipcMain.on('dialogMessage', () => {dialogMessage()})
  ipcMain.on('dialogQuestion', () => {dialogQuestion()})
  ipcMain.on('dialogError', () => {dialogError()})
}

function dialogMessage() {
  const options = {
    type: 'info',
    title: 'Dialog',
    message: 'Title of dialog.',
    detail: 'Details for the message dialog.',
  };
  
  dialog.showMessageBox(null, options, (response, checkboxChecked) => {});
}

function dialogError() {
  const options = {
    type: 'error',
    title: 'Dialog',
    message: 'Title of error.',
    detail: 'Details for the error dialog.',
  };
  
  dialog.showMessageBox(null, options, (response, checkboxChecked) => {});
}

function dialogQuestion() {
  const options = {
    type: 'question',
    buttons: ['Cancel', 'Option One', 'Option Two', 'Option Three'],
    defaultId: 2,
    title: 'Dialog',
    message: 'Do you want to continue?',
    detail: 'Choose any of the options below or cancel.',
    checkboxLabel: 'This is a checkbox',
    checkboxChecked: true,
  };
  
  dialog.showMessageBox(null, options, (response, checkboxChecked) => {});
}
 
app.whenReady().then(() => {createWindow();})