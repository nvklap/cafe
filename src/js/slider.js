const heroSlider = document.querySelector('[data-hero-slider]');
const heroSliderItems = document.querySelectorAll('[data-hero-slider-item]');
const heroSliderPrevBtn = document.querySelector('[data-prev-btn]');
const heroSliderNextBtn = document.querySelector('[data-next-btn]');

let currSlidePos = 0;
let lastActiveSliredItem = heroSliderItems[0];

function updateSliderPos() {
  lastActiveSliredItem.classList.remove('active');
  heroSliderItems[currSlidePos].classList.add('active');
  lastActiveSliredItem = heroSliderItems[currSlidePos];
}

function showNextSlide() {
  currSlidePos >= heroSliderItems.length - 1
    ? (currSlidePos = 0)
    : currSlidePos++;
  updateSliderPos();
}

function showPrevSlide() {
  currSlidePos <= 0
    ? (currSlidePos = heroSliderItems.length - 1)
    : currSlidePos--;
  updateSliderPos();
}

heroSliderNextBtn.addEventListener('click', showNextSlide);
heroSliderPrevBtn.addEventListener('click', showPrevSlide);

// auto slide
let autoSlideInterval;

function autoSlide() {
  autoSlideInterval = setInterval(() => {
    showNextSlide();
  }, 7000);
}

heroSliderNextBtn.addEventListener('mouseover', () =>
  clearInterval(autoSlideInterval)
);
heroSliderPrevBtn.addEventListener('mouseover', () =>
  clearInterval(autoSlideInterval)
);

heroSliderNextBtn.addEventListener('mouseout', autoSlide);
heroSliderPrevBtn.addEventListener('mouseout', autoSlide);

window.addEventListener('load', autoSlide);
