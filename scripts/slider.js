document.addEventListener('DOMContentLoaded', function() {
    let swiper = new Swiper('.swiper', {
        slidesPerView: 3.5, // Количество видимых слайдов
        spaceBetween: 0, // Расстояние между слайдами (по желанию)
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });
});