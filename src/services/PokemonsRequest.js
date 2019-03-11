const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?limit=2";

const getPokemonsUrl = () => fetch(ENDPOINT).then(response=> response.json())

export {getPokemonsUrl};


