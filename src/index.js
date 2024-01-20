const URL = 'https://api.thecatapi.com/v1';
API_KEY =
  'live_rnnYDp9s8iR62R9IizxA0JiibxhK2dxyt24ridFGGcAZS6MkHaeULrqjFpOhJr5E';

function searchCat() {
  const options = {
    headers: {
      'x-api-key': API_KEY,
    },
  };
  const response = fetch(`${URL}/breeds`, options)
    .then(resp => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch(err => console.error(err));
}

searchCat();
