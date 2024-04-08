// Swiper

const swiper = new Swiper('main > .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500
    },       
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: 'main .next-btn',
        prevEl: 'main .prev-btn'
    }
});

const swiperEl = document.querySelector('.swiper');

swiperEl.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
});

swiperEl.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
})


// Item Slides

const swiperItem = new Swiper('.swiper.items', {
    direction: 'horizontal',
    navigation: {
        nextEl: 'section .next-btn',
        prevEl: 'section .prev-btn',
    },
});



// hiddenHeader
const headerEl = document.querySelector('header');
const mainEl = document.querySelector('main');

window.addEventListener('scroll', () => {
    headerEl.classList.toggle('active', window.scrollY > 50);
    mainEl.classList.toggle('active', window.scrollY > 50);
})


// scrollBtn
const goTopBtn = document.querySelector('.btn-gotop');

window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
        goTopBtn.classList.add('active')
    } else {
        goTopBtn.classList.remove('active');
    }
})
goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})