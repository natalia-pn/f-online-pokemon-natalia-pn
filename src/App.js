import React, { Component } from 'react';
import './App.css';

const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=2';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: ""
    }
  }

  componentDidMount() {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => {
        const results = data.results;
    
        results.map(item=>{
          return (
           item.url,

           fetch(item.url)
            .then(response => response.json())
            .then(data=> {
               const sprite = data.sprites.front_default;
               const name = data.forms[0].name;
               const number = data.order;
               const types = data.types;

               console.log(sprite)
               console.log(name)
         
               console.log(number)
               console.log(types)

            })
        )});

        

    
      })



      
     
      
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
