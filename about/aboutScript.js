const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
const totalSlides = slides.children.length;

function updateSlide() {
    const slideWidth = slides.children[0].clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

prev.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides; 
    updateSlide();
});

next.addEventListener('click', () => {
    index = (index + 1) % totalSlides; // Loop back to first slide
    updateSlide();
});
