// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);


const galleryListTwo = document.querySelector(".gallery");
const createMarkupTwo = createImagesMarkup(galleryItems);
galleryListTwo.insertAdjacentHTML("beforeend", createMarkupTwo);

function createImagesMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}" data-lightbox="lbox" onclick="event.preventDefault()">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
    </a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox('.gallery__link', { 
    navText: "<>",
    captionsData: "alt",
    captionDelay: 250,

});
