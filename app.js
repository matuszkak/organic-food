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
    delay: 3000,
  },
});

//smooth acroll a shop gomb megnyomásakor

var scroll = new SmoothScroll('a[href*="#"]');

// menu sötétítés lefelé törtlnő scrollozáskor
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY >= 147) {
    document.querySelector('.upper-nav-bar').classList.add('darken1');
    document.querySelector('.lower-nav-bar').classList.add('darken2');
  } else {
    document.querySelector('.upper-nav-bar').classList.remove('darken1');
    document.querySelector('.lower-nav-bar').classList.remove('darken2');
  }
});