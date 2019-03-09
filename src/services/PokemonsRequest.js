const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=2';

const getPokemonsUrl = () => fetch(ENDPOINT).then(response=> response.json())

export {getPokemonsUrl};


