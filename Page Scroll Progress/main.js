// Scroll progress bar
let progress = document.querySelector('.scroller');

// Full height - on screen height
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;
    
    progress.style.width = `${( scrollTop / height ) * 100}%`;
});