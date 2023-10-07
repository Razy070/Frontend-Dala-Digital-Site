const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    const header = accordion.querySelector('.accordion-header');
    const content = accordion.querySelector('.accordion-content');
    const toggleButton = accordion.querySelector('.accordion-toggle');
    const icon = accordion.querySelector('.icon'); // Добавляем выбор иконки

    toggleButton.addEventListener('click', () => {
        if (content.classList.contains('active')) {
            content.classList.remove('active');
            icon.classList.remove('rotate'); // Удаляем класс "rotate" при закрытии аккордеона
        } else {
            content.classList.add('active');
            icon.classList.add('rotate'); // Добавляем класс "rotate" при открытии аккордеона
        }

        // Закрываем остальные аккордеоны
        accordions.forEach((otherAccordion) => {
            if (otherAccordion !== accordion) {
                otherAccordion.querySelector('.accordion-content').classList.remove('active');
                otherAccordion.querySelector('.icon').classList.remove('rotate'); // Удаляем класс "rotate" у других иконок
            }
        });
    });
});