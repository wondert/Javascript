jQuery(document).ready(function() {
    "use strict";
    // initialize paper.js window in the browser
    paper.install(window);

    // create canvas within HTML canvas element
    paper.setup(document.getElementById("mainCanvas"));

    // create array to store range of colors to fill circles
    var colorHouse = ["green", "red", "blue", "orange", "yellow", "blue", "red", "green"];
    
    // returns random integer within range min:max, inclusive
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // draw random circles within canvas on mouse click
    var tool = new Tool();
    tool.onMouseDown = function(e) {
        var c = Shape.Circle(e.point.x, e.point.y, 20);
        c.fillColor = colorHouse[getRandomIntInclusive(0,7)];
    };

    // clear canvas on button-click
    var myButton = document.getElementById("reset-button");
    myButton.addEventListener("click", clearCanvas);
    function clearCanvas() {
        project.activeLayer.removeChildren();
    }

    // print to console js when js file has been run
    console.log("main.js loaded");
});