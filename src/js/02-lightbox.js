import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryConteiner = document.querySelector(".gallery");
const cardsGallery = createGalleryItems(galleryItems);
galleryConteiner.insertAdjacentHTML("beforeend", cardsGallery);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  docClose: false,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);
