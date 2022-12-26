import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);

const cardsMarkup = createGalleryItems(galleryItems);

function createGalleryItems (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
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
    }).join(``);
    };

galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);

galleryContainer.addEventListener(`click`, onGalleryContainerClick);

function onGalleryContainerClick (evt) {
    evt.preventDefault();
    const isImageItemEl = evt.target.classList.contains(`gallery__image`);

if(!isImageItemEl) {
    return;
}

const selectedImage = evt.target.getAttribute(`data-source`);

const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

instance.show()

galleryContainer.addEventListener(`keydown`, evt => {
    if(evt.key === `Escape`) {
        instance.close();
        galleryContainer.removeEventListener;
    }
})

}

function removeActiveImageClass() {
const currentActiveImage = document.querySelector(`.gallery__item.gallery__image`);

if (currentActiveImage) {
    currentActiveImage.classList.remove(`gallery__image`);
}
}

function addActiveImageClass(image) {
    image.classList.add(`.gallery__image`);
}

