
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function createMarkup(arr) {
  const list = document.querySelector('.gallery');
  list.innerHTML = '';
  if (arr.length === 0) {
    iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageColor: '#fff',
    backgroundColor: 'red',
    position: 'topRight',
  });
  }
  const markup = arr
    .map(
      ({
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        largeImageURL,
      }) => {
        return `<li class="gallery-item">
  <a class="gallery-link" href=${largeImageURL} onclick="event.preventDefault()">
    <img
      class="gallery-image"
      src=${webformatURL}
      alt=${tags} /></a>
      <div class="list-info">
      <ul class="info-items">
  <li class="item-info">
    <h3  class="item-title">Likes</h3>
    <p class="item-text">${likes}</p>
  </li>
  <li class="item-info">
    <h3 class="item-title">Views</h3>
    <p class="item-text">${views}</p>
  </li>
  <li class="item-info">
    <h3 class="item-title">Comments</h3>
    <p class="item-text">${comments}</p>
  </li>
  <li class="item-info">
    <h3 class="item-title">Downloads</h3>
    <p class="item-text">${downloads}</p>
  </li>
</ul>
      </div>
</li>`;
      }
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}
