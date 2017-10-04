const electron = require('electron');
const {app, BrowserWindow} = electron;

// open window on app launch
app.on('ready', () => {
    let win = new BrowserWindow({width:800, height:600});
    win.loadURL(`file://${__dirname}/index.html`);
});

// allows code below to be used outside main.js file
// will open window with any "filename" we pass to it
exports.openWindow = (filename) => {
    let win = new BrowserWindow({width:800, height:600});
    win.loadURL(`file://${__dirname}/` + filename + `.html`);
};