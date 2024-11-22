const parallaxItems = document.querySelectorAll('[data-parallax-item]');

let mouseX = 0;
let mouseY = 0;

function updateParallax() {
  for (let i = 0; i < parallaxItems.length; i++) {
    const speed = Number(parallaxItems[i].dataset.parallaxSpeed) || 1;
    const translateX = mouseX * speed;
    const translateY = mouseY * speed;

    parallaxItems[
      i
    ].style.transform = `translate3d(${translateX}px, ${translateY}px, 0px)`;
  }
}

window.addEventListener('mousemove', e => {
  const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
  const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;

  mouseX = -normalizedX * 3;
  mouseY = -normalizedY * 3;

  requestAnimationFrame(updateParallax);
});
