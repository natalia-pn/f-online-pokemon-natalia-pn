import React, { Component } from 'react';
import './App.css';

const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=2';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
         results: [],
         pokemon: [],
         sprite: [],
         name: '',
         number: '',
         types: []
      } 
  }

  componentDidMount() {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        this.setState({results: results});

        let pokemon = [];

        results.map(item=>
          pokemon.push(item.url));

        this.setState({pokemon: pokemon})

        const urlsArray = this.state.pokemon;

        Promise.all(urlsArray.map(url=>fetch(url)))
          .then(response => response.json())
          .then(data=> {
            const sprite = data.sprites.front_default;
            const name = data.forms[0].name;
            const number = data.order;
            const types = data.types;
    
        })
      })
    }

  render() {

    return (
      <div className="Pokemons-app">
        <label className="Search-field__label"></label>
        <input className="Search-field"type="text"></input>

        <div className="Pokemons__container">
          
        </div>
        

         
      
      </div>
    );
  }
}

export default App;
