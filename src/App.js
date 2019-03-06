import React, { Component } from 'react';
import './App.css';

const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=2';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      const results = data.results;
      console.log(results);

    });
  }



  
  
  



  render() {
    return (
      <div className="Pokemons-app">
        <label className="Search-field__label"></label>
        <input className="Search-field"type="text"></input>

        <div className="Pokemons__container"></div>
        

         
      
      </div>
    );
  }
}

export default App;
