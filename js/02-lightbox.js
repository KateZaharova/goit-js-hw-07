import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const markup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
            <a class="gallery__link" href='${original}'>
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>`})
        .join('');      
}

galleryList.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
    captions: true,
    captionPosition: "bottom",
    captionDelay: 250,
    captionsData: "alt",
});



