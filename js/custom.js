$(document).ready(function () {
    var swiper = new Swiper(".mian_slide", {
        direction: "vertical",
        mousewheel: true,
        speed: 800,
        slidesPerView: "1.4",
        centeredSlides: true,
        loop: false,
        spaceBetween: 60,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },


    });
});