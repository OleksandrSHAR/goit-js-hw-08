// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryColektion = document.querySelector('.gallery')
const itemsMarkup = createMarkur(galleryItems);
galleryColektion.insertAdjacentHTML('beforeend', itemsMarkup);

function createMarkur(items) {
    return items.map(({ preview, original,description}) =>
    {
        return `<li>
  <a class="gallery__item" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       alt="${description}"
     />
  </a>
 </li>`
    }).join('');
}
 // var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
var lightbox = new SimpleLightbox('.gallery a',
    { captionsData: 'alt', captionDelay: 250 });
