import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);


const initSlider = () => {
new Swiper(".swiper", {
    direction: 'horizontal',
    slidesPerView: 1.3,
    grabCursor: true,
    loopAdditionalSlides: 1,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    mousewheel: {
        invert: true,
    },
})
}
initSlider();