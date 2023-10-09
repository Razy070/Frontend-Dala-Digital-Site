// Получаем ссылки на изображения для разных размеров экрана
const smallScreenImageSrc1 = "img_1/Untitled.svg";
const smallScreenImageSrc2 = "img_1/Untitled1.svg";
const smallScreenImageSrc3 = "img_1/Untitled2.png";
const smallScreenImageSrc4 = "img_1/Untitled3.svg";
const smallScreenImageSrc5 = "img_1/Untitled4.png";
const smallScreenImageSrc6 = "img_1/Untitled5.svg";
const smallScreenImageSrc7 = "img_1/Untitled6.svg";
const smallScreenImageSrc8 = "img_1/Untitled7.svg";

// Получаем ссылки на элементы с классом "adaptive-image"
const adaptiveImages = document.querySelectorAll(".adaptive-image");

// Функция для обновления фоновых изображений на мобильных устройствах
function updateBackgroundImagesForMobile() {
    const screenWidth = window.innerWidth;

    adaptiveImages.forEach(function (element) {
        if (screenWidth < 768) { // Меньше 768px - маленький экран (мобильное устройство)
            if (element.id === "adaptive-image1") {
                element.style.backgroundImage = `url('${smallScreenImageSrc1}')`;
            } else if (element.id === "adaptive-image2") {
                element.style.backgroundImage = `url('${smallScreenImageSrc2}')`;
            } else if (element.id === "adaptive-image3") {
                element.style.backgroundImage = `url('${smallScreenImageSrc3}')`;
            } else if (element.id === "adaptive-image4") {
                element.style.backgroundImage = `url('${smallScreenImageSrc4}')`;
            } else if (element.id === "adaptive-image5") {
                element.style.backgroundImage = `url('${smallScreenImageSrc5}')`;
            } else if (element.id === "adaptive-image6") {
                element.style.backgroundImage = `url('${smallScreenImageSrc6}')`;
            } else if (element.id === "adaptive-image7") {
                element.style.backgroundImage = `url('${smallScreenImageSrc7}')`;
            } else if (element.id === "adaptive-image8") {
                element.style.backgroundImage = `url('${smallScreenImageSrc8}')`;
            }
        } else { // Больше или равно 768px - большой экран
            if (element.id === "adaptive-image1") {
                element.style.backgroundImage = `url('frames/vpluse.png')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image2") {
                element.style.backgroundImage = `url('frames/div2phones.svg')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image3") {
                element.style.backgroundImage = `url('frames/div3left.png')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image4") {
                element.style.backgroundImage = `url('frames/div3right.svg')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image5") {
                element.style.backgroundImage = `url('frames/div4left.svg')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image6") {
                element.style.backgroundImage = `url('frames/div4right.svg')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image7") {
                element.style.backgroundImage = `url('frames/div5left.png')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image8") {
                element.style.backgroundImage = `url('frames/div5right.png')`; // Оставляем исходное изображение
            }
        }
    });
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener("load", updateBackgroundImagesForMobile);
window.addEventListener("resize", updateBackgroundImagesForMobile);
