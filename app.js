//slideshow

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  speed: 3000,
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 300,
  },
});