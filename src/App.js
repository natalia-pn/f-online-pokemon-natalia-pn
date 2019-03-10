import React, { Component } from 'react';
import './App.css';
import Filter from './components/Filter';
import PokemonsList from './components/PokemonsList';
import {getPokemonsUrl} from './services/PokemonsRequest';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
         pokemonsArray: [],
         searchValue: ''
      } 
    this.getSearchValue = this.getSearchValue.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
  }

  componentDidMount() {
    getPokemonsUrl()
      .then(data => {
        const results = data.results;
  
        const requestList = results.map(item=>
          fetch(item.url));

        Promise.all(requestList)
          .then(responses => {
            const responsesList = responses.map(responses => responses.json())

            Promise.all(responsesList)
              .then(responsesResult => {
                this.setState({pokemonsArray: responsesResult});
              })
          })
      })
  }

  getSearchValue(e) {
    const searchValue = e.currentTarget.value;
    this.setState({
      searchValue: searchValue
    })
  }

  filterPokemons() {
    const {pokemonsArray, searchValue} = this.state;
    return pokemonsArray.filter(item => item.name.toUpperCase().includes(searchValue.toUpperCase()));
  }

  render() {
    return (
      <div className="Pokemons__app">
        <Filter getSearchValue={this.getSearchValue}/>

        <div className="Pokemons__container">
          <PokemonsList filterPokemons={this.filterPokemons()}/>
        </div>
      </div>
    );
  }
}

export default App;
