document.addEventListener('DOMContentLoaded', function() {
    let swiper = new Swiper('.swiper', {
        slidesPerView: 3, // Количество видимых слайдов
        spaceBetween: 40, // Расстояние между слайдами (по желанию)
        loop: true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        }
    });
});