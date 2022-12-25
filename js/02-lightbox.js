import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);
const cardsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup)

function createGalleryItems (galleryItems) {
return galleryItems.map(({preview, original, description}) => {
    return `
   
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>

    `;
}).join(``);  

}

new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250});
