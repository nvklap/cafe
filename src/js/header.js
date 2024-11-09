const header = document.querySelector('[data-header]');
const backToTopBtn = document.querySelector('[	data-back-to-top]');

let lastScrollPos = 0;

function hideHeader() {
  const isScrollDown = lastScrollPos < window.scrollY;
  if (isScrollDown) {
    header.classList.add('hidden');
    backToTopBtn.classList.add('active');
  } else {
    header.classList.remove('hidden');
    backToTopBtn.classList.remove('active');
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener('scroll', function () {
  if (this.window.scrollY >= 50) {
    header.classList.add('active');
    hideHeader();
  } else {
    header.classList.remove('active');
  }
});
