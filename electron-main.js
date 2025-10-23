const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow(){
  const win = new BrowserWindow({
    width: 420,
    height: 820,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });
  win.removeMenu();
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
app.on('window-all-closed', ()=>{ if(process.platform !== 'darwin') app.quit(); });
