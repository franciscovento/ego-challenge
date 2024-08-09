import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      370: {
        slidesPerView: 1.2,
      },
      450: {
        slidesPerView: 1.5,
      },
      560: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.2,
      },
      900: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    speed: 400,
    spaceBetween: 0,
    modules: [Navigation, Pagination],
  });
});