document.addEventListener('DOMContentLoaded', function() {
    let swiper = new Swiper('.swiper', {
        slidesPerView: 3.5, // Количество видимых слайдов
        spaceBetween: 0, // Расстояние между слайдами (по желанию)
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });
    const breakpoint = window.matchMedia('(min-width: 768px)');

    const breakpointChecker = function() {
        if (breakpoint.matches) {
            // На больших экранах, устанавливаем другое количество видимых слайдов
            swiper.params.slidesPerView = 3.5; // Например, 3 видимых слайда
        } else {
            // На меньших экранах, устанавливаем другое количество видимых слайдов
            swiper.params.slidesPerView = 1.3; // Например, 1.3 видимых слайда
            swiper.params.spaceBetween = 10;
        }

        // Обновляем Swiper с новыми параметрами
        swiper.update();
    };

    // Добавляем обработчик изменения разрешения экрана
    breakpoint.addListener(breakpointChecker);

    // Запускаем функцию проверки разрешения на старте
    breakpointChecker();
});