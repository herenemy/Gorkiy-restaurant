'use strict';

const header = document.querySelector('.header'),
  sectionIntro = document.querySelector('.section_intro'),
  navLinksContainer = document.querySelector('.nav__items'),
  allSectionsNode = document.querySelectorAll('.appearance-section'),
  btnShowAlbum = document.getElementById('btnAlbumShow'),
  btnHideAlbum = document.getElementById('btnAlbumHide'),
  albumContainer = document.querySelector('.grid__dropdown-inner'),
  btnShowAlbumContainer = document.getElementById('btnAlbumShowContainer'),
  btnOrderIntro = document.querySelector('.btn__order_intro'),
  btnScrollToTop = document.querySelector('.btn-scroll-to-top'),
  burgerContainer = document.querySelector('.burger-nav__inner'),
  burgerMenu = document.querySelector('.burger'),
  popup = document.querySelector('.popup'),
  btnPopupClose = document.querySelector('.popup__close'),
  overlay = document.querySelector('.overlay');

btnScrollToTop.addEventListener('click', goTotop);

function goTotop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -50);
    setTimeout(goTotop, 0);
  }
}

navLinksContainer.addEventListener('click', e => {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains('nav__link')) {
    const href = target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    console.log('hello');
  }
});

// Appearance section
// function appearanceSection(entries, observer) {
//   const entry = entries[0];
//   console.log(entry);

//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove('section_hidden');
//   observer.unobserve(entry.target);
// }

// const sectionObserver = new IntersectionObserver(appearanceSection, {
//   root: null,
//   threshold: 0,
// });

// allSectionsNode.forEach(item => {
//   sectionObserver.observe(item);
//   item.classList.add('section_hidden');
// });

// Header observer

// const mediaQuery = window.matchMedia(`(max-width: 860px)`);
// if (mediaQuery.matches) {
//   console.log('hello world');
// }

// function checkQuery(mediaQuery) {
//   if (mediaQuery.matches) {
//     header.classList.add('nav_sticky');
//   }
// }

// mediaQuery.addEventListener('change', checkQuery);

const headerHeight = header.getBoundingClientRect().height;
const getStickyNav = entries => {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    btnScrollToTop.classList.add('btn-scroll_active');
  } else {
    btnScrollToTop.classList.remove('btn-scroll_active');
  }
};

const headerObserver = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0.1,
  rootMargin: `-${headerHeight}px`,
});
headerObserver.observe(sectionIntro);

// Album section
btnShowAlbum.addEventListener('click', () => {
  albumContainer.classList.add('grid_active');
  btnShowAlbumContainer.classList.add('btn_hidden');
});

btnHideAlbum.addEventListener('click', () => {
  albumContainer.classList.remove('grid_active');
  btnShowAlbumContainer.classList.remove('btn_hidden');
});

// burger menu
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  burgerContainer.classList.toggle('burger__nav_active');
  document.body.classList.toggle('body_hidden');
});

// Popup
btnOrderIntro.addEventListener('click', showPopup);
btnPopupClose.addEventListener('click', hidePopup);
overlay.addEventListener('click', hidePopup);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') hidePopup();
});

function showPopup() {
  document.body.style.overflow = 'hidden';
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function hidePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}
