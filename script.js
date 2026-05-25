const swiper = new Swiper('.brands', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  loop: true,
  pagination: {
    el:'.swiper-pagination',
    clickable: true,
  },
   breakpoints: {
    755: {
        enabled: false,
    }
   }

});