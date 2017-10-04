const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

app.on('ready', function() {
    win = new BrowserWindow({})
    
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:', 
        slashes: true
    }));
});