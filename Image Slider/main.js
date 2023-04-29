// All slide images
let images = Array.from(
    document.querySelectorAll('.images-container > img')
);

// Current active slide number
let currentSlide = 1;

// slides numbers
let spans = Array.from(
    document.querySelectorAll('.slide-control .navigate-images > span')
);

// Slide number
let number = document.querySelector('.images-container .slide-number');

// Next & Previous
let next = document.querySelector('.slide-control .next');
let previous = document.querySelector('.slide-control .previous');

// Change active slide on click the number below
spans.forEach(e => {
    e.addEventListener('click', () => {
        spans[currentSlide - 1].classList.toggle("active"); 
        
        activeSlide(e.getAttribute('data-slide'));
        e.classList.toggle("active"); 
    });
});

next.addEventListener('click', () => {
    activeSlide(currentSlide + 1);
});

previous.addEventListener('click', () => {
    activeSlide(currentSlide - 1);
});

// Change active slide
function activeSlide(slideNumber) {
    if (slideNumber > 0 && slideNumber <= images.length) {
        // Hide current slide
        images[currentSlide - 1].style.opacity = "0";
        spans[currentSlide - 1].classList.toggle("active"); 
        
        // Show another slide
        images[slideNumber - 1].style.opacity = "1";
        spans[slideNumber - 1].classList.toggle("active"); 

        // Change currentSlide
        currentSlide = slideNumber;

        // Change number
        number.textContent = `#${currentSlide}`;
    } else if (slideNumber > 4) {
        activeSlide(1);
    } else {
        activeSlide(4);
    }
}