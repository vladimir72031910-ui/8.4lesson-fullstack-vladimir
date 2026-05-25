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

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-hidden');
    const arrow = document.querySelector('.expand');
    const textSpan = document.querySelector('.hiddens');

button.addEventListener('click', function() {
    const isHidden = document.querySelector('.hidden-brands').classList.toggle('hidden');
    if (isHidden) {
        textSpan.textContent = 'Показать все';
        arrow.style.transform = 'rotate(0deg)';

    }  else {
        textSpan.textContent = 'Скрыть';
        arrow.style.transform = 'rotate(180deg)';
    }
   
});

});