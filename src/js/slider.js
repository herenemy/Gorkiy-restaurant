const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: '3000',
  },
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  loop: false,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
    onlyInViewPort: true,
    pageUpDown: true,
  },
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //   },
  //   600: {
  //     slidesPerView: 2,
  //   },
  //   900: {
  //     slidesPerView: 3,
  //   },
  // },
});
