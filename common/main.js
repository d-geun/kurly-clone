


// swiper

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    }
});

const headerEl = document.querySelector('header');
const mainEl = document.querySelector('main');

window.addEventListener('scroll', () => {
    headerEl.classList.toggle('active', window.scrollY > 50);
    mainEl.classList.toggle('active', window.scrollY > 50);
})
