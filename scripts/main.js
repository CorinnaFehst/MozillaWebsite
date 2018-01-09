// Define a Function
function sayOuch() {
    alert('Ouch! Stop poking me!');
}

function sayScandal() {
    alert('Scandal!!');
}
// Use a CSS selector to identify an element
var foxImage = document.querySelector('#foxpic');
var NetNeutralitypic = document.querySelector('#NetNeutralitypic');

// Assign the function to the onclick event on that element
foxImage.onclick = sayOuch;
NetNeutralitypic.onclick = sayScandal;

// Use a CSS selector to identify an element
