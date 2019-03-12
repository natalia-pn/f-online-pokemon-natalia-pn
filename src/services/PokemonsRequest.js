const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?limit=5";

const getPokemonsUrl = () => fetch(ENDPOINT).then(response=> response.json())

export {getPokemonsUrl};


