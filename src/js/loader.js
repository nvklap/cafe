const loader = document.querySelector('[data-loader]');

window.addEventListener('load', () => {
  loader.classList.add('loaded');
  document.body.classList.add('loaded');
});
