var swiper = new swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween:20,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    naviagation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
});