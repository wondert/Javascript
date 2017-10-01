const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Global reference to the window object. Required to keep window open.
let win;

function createWindow(){
    // Create browser window
    win = new BrowserWindow({width:800, height:600, icon:__dirname+'img/sysinfo.png'})

    // Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open the DevTools
    win.webContents.openDevTools();

    // Handle window close event
    win.on('closed', () => {
        // Dereference the window object. If storing multiple windows in array, delete them here.
        win = null;
    });
}

// Run create window function
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform != 'darwin'){
        app.quit();
    }
});

// Include the rest of the app's specific main process code here.