const select = document.querySelector('.breed-select');
const catInfoBody = document.querySelector('.cat-info');

const URL = 'https://api.thecatapi.com/v1';
API_KEY =
  'live_rnnYDp9s8iR62R9IizxA0JiibxhK2dxyt24ridFGGcAZS6MkHaeULrqjFpOhJr5E';

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

select.addEventListener('change', onSelectedBreed);

function onSelectedBreed(id) {
  console.log(id.currentTarget.value);
  const breedId = id.currentTarget.value;

  function fetchCatByBreed(breedsId) {
    return fetch(
      `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedsId}`
    )
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        console.log(resp);
        return resp.json();
      })
      .catch(err => console.error(err));
  }
  fetchCatByBreed(breedId).then(data => murkupCatInfo(data));
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
  catInfoBody.innerHTML = murkup;
}
