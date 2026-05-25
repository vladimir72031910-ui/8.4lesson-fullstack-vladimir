const swiper = new Swiper('.brands', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  loop: true,
  pagination: {
    el:'.swiper-pagination',
    clickable: true,
  },
   breakpoints: {
    770: {
        enabled: false,
    }
   }

});

document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('.show-hidden');

    buttons.forEach(function (button) {

        const arrow = button.querySelector('.expand');
        const textSpan = button.querySelector('.hiddens');

        button.addEventListener('click', function () {

            const section = button.closest('section');

            const hiddenBlock = section.querySelector('.hidden-brands');

            const isHidden = hiddenBlock.classList.toggle('hidden');

            if (isHidden) {

                textSpan.textContent = 'Показать все';
                arrow.style.transform = 'rotate(0deg)';

            } else {

                textSpan.textContent = 'Скрыть';
                arrow.style.transform = 'rotate(180deg)';

            }

        });

    });

});
