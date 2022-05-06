import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryConteiner = document.querySelector(".gallery");
// Шаг 2 Зарендерить разметку в <div>
const cardsGallery = createGalleryItems(galleryItems);
galleryConteiner.insertAdjacentHTML("beforeend", cardsGallery);

// Шаг 3 Делегирования на div.gallery и получение url большого изображения
galleryConteiner.addEventListener("click", onGalleryContainerClick);
// Шаг 1 Создание разметки элемента галлереи
function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join("");
}
// Шаг 3 Делегирования на div.gallery и получение url большого изображения
function onGalleryContainerClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault(); // При клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.

  const imgLarge = event.target.dataset.source;
  //Шаг 4 Подключение скрипта и стилей библиотеки модального окна basicLightbox
  const instance = basicLightbox.create(`<img src="${imgLarge}"></img>`);

  instance.show();
}

console.log(galleryItems);
