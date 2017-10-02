// Creates static array of circles when linked to index.html

jQuery(document).ready(function() {
    "use strict";
    // initialize paper.js window in the browser
    paper.install(window);

    // create canvas within HTML canvas element
    paper.setup(document.getElementById("mainCanvas"));

    // hide reset button. page not interactive
    jQuery("#reset-button").hide();

    // change header to show page is not interactive
    jQuery(".myheader h1").text("Static Colored Circles!");

    // create array to store range of colors to fill circles
    var colorHouse = ["green", "red", "blue", "orange", "yellow", "blue", "red", "green"];
    
    // define variables to create circles    
    var counter = 0;
    var radius = 20;
    var circleHouse;

    // fill-in 8x8 grid with circles of fixed width and position
    for (var x = 25; x < 400; x+=50) {
        counter++;
        for (var y = 25; y < 400; y+=50) {
            circleHouse = Shape.Circle(x, y, radius);
            circleHouse.fillColor = colorHouse[counter-1];
            paper.view.draw();
        }
    }

    // print to console js when js file has been run
    console.log("main.js loaded");
});