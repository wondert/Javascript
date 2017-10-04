const fs = require('fs');
const path = require('path');

// holds file or folder paths as strings.
let pathsToFiles = new Array();
// holds contents of data files as strings.
let fileContents = new Array();
    
// captures file metadata from a drag and drop event
(function () {
    var holder = document.getElementsByClassName('drop_zone');

    holder.ondragover = () => {
        return false;
    };

    holder.ondragleave = () => {
        return false;
    };

    holder.ondragend = () => {
        return false;
    };

    // handles file drop event. captures absolute path of file.
    holder.ondrop = (e) => {
        e.preventDefault();

        for (let f of e.dataTransfer.files) {
            console.log('File(s) you dragged here: ', f.path)
            pathsToFiles.push(f.path);
            // read contents of file
            fs.readFile(pathsToFiles[0].toString(), {encoding: 'utf8'}, function(err, data) {
                if (err) {
                    return console.error(err);
                }
                fileContents.push(data); 
                console.log("Data received.");
            });
        }

        return false;
    };
})();

// MAKE HTML BUTTON 
// Add Event listner
// Execute code below
// search for string 
if (fileContents[0].includes('/J')) {
    console.log('Found J!');
}