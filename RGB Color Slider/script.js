// Sliders
let all = document.getElementsByTagName('input');

// Display box
let display = document.getElementsByClassName('display')[0];

// Container
let container = document.getElementsByClassName('container')[0];

// Change background-color with sliders 
for (let i = 0; i < 3; i++) {
    // Add the onchange event listener for all sliders
    all[i].addEventListener('change', function () {
        container.style.backgroundColor = `rgb(${all[0].value}, ${all[1].value}, ${all[2].value})`;
        display.textContent = `rgb(${all[0].value}, ${all[1].value}, ${all[2].value})`;
    });
}

