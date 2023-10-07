// Получаем ссылки на изображения для разных размеров экрана
const smallScreenImageSrc1 = "photo-2-reade/Untitled.svg";
const smallScreenImageSrc2 = "photo-2-reade/Untitled1.svg";
const smallScreenImageSrc3 = "photo-2-reade/Untitled2.png";
const smallScreenImageSrc4 = "photo-2-reade/Untitled3.svg";
const smallScreenImageSrc5 = "photo-2-reade/Untitled4.png";
const smallScreenImageSrc6 = "photo-2-reade/Untitled5.svg";
const smallScreenImageSrc7 = "photo-2-reade/Untitled6.svg";
const smallScreenImageSrc8 = "photo-2-reade/Untitled7.svg";
const smallScreenImageSrc9 = "photo-2-reade/presentation.png";
const smallScreenImageSrc10 = "photo-2-reade/inteh.png";
const smallScreenImageSrc11 = "photo-2-reade/divleft.png";
const smallScreenImageSrc12 = "photo-2-reade/divright.png";

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
            } else if (element.id === "adaptive-image9") {
                element.style.backgroundImage = `url('${smallScreenImageSrc9}')`;
            } else if (element.id === "adaptive-image10") {
                element.style.backgroundImage = `url('${smallScreenImageSrc10}')`;
            }
            else if (element.id === "adaptive-image11") {
                element.style.backgroundImage = `url('${smallScreenImageSrc11}')`;
            }
            else if (element.id === "adaptive-image12") {
                element.style.backgroundImage = `url('${smallScreenImageSrc12}')`;
            }

        } else { // Больше или равно 768px - большой экран
            if (element.id === "adaptive-image1") {
                element.style.backgroundImage = `url('photo-2-reade/vpluse.png')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image2") {
                element.style.backgroundImage = `url('photo-2-reade/div2phones.svg')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image3") {
                element.style.backgroundImage = `url('photo-2-reade/div3left.png')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image4") {
                element.style.backgroundImage = `url('photo-2-reade/div3right.svg')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image5") {
                element.style.backgroundImage = `url('photo-2-reade/div4left.svg')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image6") {
                element.style.backgroundImage = `url('photo-2-reade/div4right.svg')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image7") {
                element.style.backgroundImage = `url('photo-2-reade/div5left.png')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image8") {
                element.style.backgroundImage = `url('photo-2-reade/div5right.png')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image9") {
                element.style.backgroundImage = `url('photo-2-reade/presentation.png')`; // Оставляем исходное изображение
            }
              else if (element.id === "adaptive-image10") {
                element.style.backgroundImage = `url('photo-2-reade/inteh.png')`; // Оставляем исходное изображение
            } else if (element.id === "adaptive-image11") {
                element.style.backgroundImage = `url('photo-2-reade/divleft.png')`; // Оставляем исходное изображение
            }
            else if (element.id === "adaptive-image12") {
                element.style.backgroundImage = `url('photo-2-reade/divright.png')`; // Оставляем исходное изображение

        }



        }
    });
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener("load", updateBackgroundImagesForMobile);
window.addEventListener("resize", updateBackgroundImagesForMobile);
