const packs= document.querySelector('.packs');
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentSlide = 0;
const slideWidth = packs.querySelector('.carousel-slide').offsetWidth; // Get width of a single slide

// Update functionality to handle dynamic number of slides
const totalSlides = packs.querySelectorAll('.carousel-slide').length;
nextButton.addEventListener('click', () => {
  if (currentSlide === totalSlides - 1) return; // Check if it's the last slide
  currentSlide++;
  packs.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

prevButton.addEventListener('click', () => {
  if (currentSlide === 0) return; // Check if it's the first slide
  currentSlide--;
  packs.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

