import { searchCat, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './style.css';

const selectEl = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const err = document.querySelector('.error');

searchCat()
  .then(data => markup(data))
  .catch(fetchError);

function markup(arr) {
  storedBreeds = arr;
  const markup = storedBreeds

    .map(({ id, name }) => `<option value='${id}'>${name}</option>`)
    .join(' ');
  selectEl.insertAdjacentHTML('beforeend', markup);
}

selectEl.addEventListener('change', onSelectedBreed);

function onSelectedBreed(id) {
  console.log(id.currentTarget.value);
  const breedId = id.currentTarget.value;

  fetchCatByBreed(breedId)
    .then(data => murkupCatInfo(data))
    .catch(fetchError);
}

function murkupCatInfo(data) {
  const { breeds, url } = data[0];
  const murkup = `
  
    <img src="${url}" alt="${breeds[0].name}" width=300>
    <h5><a href="${url}">${url}</a></h5>
    
    <H2>${breeds[0].name}</H2>
    <h3>${breeds[0].description}</h3>
    <h3>${breeds[0].temperament}</h3>
  `;
  catInfo.innerHTML = murkup;
}

function fetchError(error) {
  Notify.failure('Oops! Something went wrong! Try reloading the page');
}
