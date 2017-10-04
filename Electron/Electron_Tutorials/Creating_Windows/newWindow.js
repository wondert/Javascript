// provide accessors to main.js file window constructor (see main.js exports. function)
const remote = require('electron').remote;
const main = remote.require('./main.js');

// create button
var button = document.createElement('button');
button.textContent = 'Open Window';

// dynamically open new window on click
button.addEventListener('click', () => {
    // grab current window (optional)
    let window = remote.getCurrentWindow();
    // open new window using html filename (see main.js exports. function)
    main.openWindow('index');
    // close original window (optional)
    window.close();
}, false);
document.body.appendChild(button);
