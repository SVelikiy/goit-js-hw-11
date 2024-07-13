import { getImg } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-form');
const list = document.querySelector('.js-list');
const loader = document.querySelector('.js-loader');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const searchImg = form.elements.search.value.toLowerCase().trim();
  if (searchImg === "") {
    return iziToast.show({
      message: 'Please enter your request.',
      messageColor: '#fff',
      backgroundColor: 'red',
      position: 'topRight',
    });
  }
  loader.classList.add('loader');
  getImg(searchImg)
    .then(data => {
      createMarkup(data.hits);
      modal.refresh();
    })
    .catch(onFetchError())
    .finally(() => {
      form.reset();
      loader.classList.remove('loader');
    });
}

  let modal = new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: 'attr',
    captionPosition: 'bottom',
    captionDelay: 250,
    captionsData: 'alt',
  });


  function onFetchError() {
    iziToast.show({
      message: 'Something went wrong, please try again',
      messageColor: '#fff',
      backgroundColor: 'red',
      position: 'topRight',
    });
  }
