// we use the getElementById method to have access to the HTML elements 
const one = document.getElementById('one');
const five = document.getElementById('five');
const ten = document.getElementById('ten');
const del = document.getElementById('delete');

// now we have access to the output div using the output variable
const output = document.getElementById('output');

// set the number value to 0
let number = 0;


// By clicking on the button one, we add 1 to the number variable on the output div

one.addEventListener('click', function() {
    number += 1;
    output.innerText = number;
})

// By clicking on the button five, we add 5 to the number variable on the output div

five.addEventListener('click', function() {
    number += 5;
    output.innerText = number;
})

// By clicking on the button ten, we add 10 to the number variable on the output div

ten.addEventListener('click', function() {
    number += 10;
    output.innerText = number;
})

// By clicking on the button C, we set the value on the output to 0

del.addEventListener('click', function() {
    number = 0;
    output.innerText = number;
})