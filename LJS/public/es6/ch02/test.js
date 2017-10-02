"use strict";

// es6 feature: block-scoped "let" declaration
const sentences = [
    { subject: "JavaScript", verb: "is", object: "great" },
    { subject: "Elephants",  verb: "are", object: "large" }
];

// es6 feature: object destructing
function say({ subject, verb, object }) {
    // es6 feature: template strings. note the quotes below are backticks (`)
    console.log(`${subject} ${verb} ${object}`);
}

// es6 feature: for..of
for (let s of sentences) {
    say(s);
}