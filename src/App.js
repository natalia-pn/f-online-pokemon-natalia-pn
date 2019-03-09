import React, { Component } from 'react';
import './App.css';

const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=2';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
         results: [],
         pokemon: [],
         pokemonsList: [],
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
  
        const requestList = results.map(item=>
          fetch(item.url));

        Promise.all(requestList)
          .then(responses => {

            console.log(responses)
            
            const responsesList = responses.map(responses => responses.json())

            Promise.all(responsesList)
              .then(responsesResult => {
                this.setState({pokemonsList: responsesResult});
                console.log(this.state.pokemonsList);
              })
          })
      })
  }


  render() {
    const { pokemonsList } = this.state

    return (
      <div className="Pokemons-app">
        <label className="Search-field__label"></label>
        <input className="Search-field"type="text"></input>

        <div className="Pokemons__container">
          <ul className="Pokemons__list">
            {pokemonsList.map(pok=> {
              return(
                <li className="Pokemon__element" key={pok.id}>
                  <div className="Image__container">
                    <img className="Pokemon__picture" alt="pokemon" src={pok.sprites.front_default}></img>
                    <p className="pokemon__order">id / {pok.id}</p>
                  </div>
                  <p className="Pokemon__name">{pok.name}</p>
                  <ul className="Pokemon__abilities">
                    {pok.abilities.map((item, index)=> {
                      return(
                        <li className="Ability" key={index}>{item.ability.name} </li>
                      )
                    })}
                  </ul>
                </li>
              );
            })}
          </ul> 
        </div>
      </div>
    );
  }
}

export default App;
