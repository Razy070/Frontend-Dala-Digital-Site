// Получаем ссылки на изображения для разных размеров экрана
const smallScreenImageSrc = "img_1/vector190(small).svg";
const largeScreenImageSrc = "img_1/vector-190.svg";


// Получаем ссылку на элементы изображений и задаем начальные значения
const imageElement = document.getElementById("adaptive-image");


// Функция для обновления атрибута src в зависимости от размера экрана
function updateImageSrc() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) { // Меньше 768px - маленький экран
        imageElement.src = smallScreenImageSrc;
    } else { // Больше или равно 1200px - большой экран
        imageElement.src = largeScreenImageSrc;
    }
}

// Вызываем функции при загрузке страницы и при изменении размера окна
window.addEventListener("load", updateImageSrc);
window.addEventListener("resize", updateImageSrc);