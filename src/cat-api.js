const URL = 'https://api.thecatapi.com/v1';
API_KEY =
  'live_rnnYDp9s8iR62R9IizxA0JiibxhK2dxyt24ridFGGcAZS6MkHaeULrqjFpOhJr5E';

export function searchCat(data) {
  return fetch(`${URL}/breeds?api_key=${API_KEY}`).then(resp => {
    console.log(resp);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export function fetchCatByBreed(breedsId) {
  return fetch(
    `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedsId}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    console.log(resp);
    return resp.json();
  });
}
