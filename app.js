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

//scrollozásra eltűnik a függőleges menu

window.addEventListener('scroll', function () {
  console.log('scrolled!');
  if (document.querySelector('.menu-container').classList.contains('js-show')) {
    document.querySelector('.menu-container').classList.remove('js-show');
    document.querySelector('.menu-container').classList.add('js-hide');
  }
});

// hambi menu klikkre előjön a függőleges menu

document.querySelector('.hambi').addEventListener('click', function () {
  console.log('clicked!');

  document.querySelector('.menu-container').classList.add('js-show');
});

