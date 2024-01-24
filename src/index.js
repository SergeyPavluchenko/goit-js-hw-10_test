const select = document.querySelector('.breed-select');
const catInfoBody = document.querySelector('.cat-info');

const URL = 'https://api.thecatapi.com/v1';
API_KEY =
  'live_rnnYDp9s8iR62R9IizxA0JiibxhK2dxyt24ridFGGcAZS6MkHaeULrqjFpOhJr5E';

select.addEventListener('change', fetchCatByBreed);

function searchCat(data) {
  return fetch(`${URL}/breeds?api_key=${API_KEY}`)
    .then(resp => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch(err => console.error(err));
}

searchCat().then(data => markup(data));

function markup(arr) {
  storedBreeds = arr;
  const markup = storedBreeds
    .map(({ id, name }) => `<option value='${id}'>${name}</option>`)
    .join(' ');
  select.innerHTML = markup;
}

function fetchCatByBreed(eve) {
  console.log(eve.currentTarget.value);
}

// function fetchBreeds(cat) {
//   console.log(cat.name);

//   const nameCat = document.createElement('h2');
//   nameCat.textContent = cat.name;
//   const descriptionCat = document.createElement('h3');
//   descriptionCat.textContent = cat.description;
//   const temperamentCat = document.createElement('h4');
//   temperamentCat.textContent = cat.temperament;

//   catInfoBody.append(nameCat, descriptionCat, temperamentCat);
// }
