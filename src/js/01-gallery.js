// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

// Функція для створення розмітки галереї
function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
}

// Створення розмітки та ініціалізація галереї
const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = galleryMarkup;

// Ініціалізація SimpleLightbox з опціями
new SimpleLightbox('.gallery a', { 
  captionsData: 'alt', 
  captionDelay: 250,
  captionPosition: 'bottom'
});


