const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?limit=25";

const getPokemonsUrl = () => fetch(ENDPOINT).then(response=> response.json())

export {getPokemonsUrl};


