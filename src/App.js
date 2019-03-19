import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import Filter from './components/Filter';
import PokemonsList from './components/PokemonsList';
import {getPokemonsUrl} from './services/PokemonsRequest';
import PokemonCard from './components/PokemonCard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
         pokemonsArray: [],
         searchValue: '',
         loadingList: false
      } 
    this.getSearchValue = this.getSearchValue.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
  }

  componentDidMount() {
    this.setState({loadingList: true})
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
                this.setState({pokemonsArray: responsesResult, loadingList: false});
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

    const { pokemonsArray, loadingList } = this.state;
  
    return (
      <div className="Pokemons__app">
        <Switch>
          <Route exact path="/" render={()=>(
            <Fragment>
              <header className="App__header">
                <div className="Triangle-left"></div>
                <div className="Triangle-right"></div>
                <Filter getSearchValue={this.getSearchValue} />
              </header>

              <main className="App__main-section">
                <div className="Pokemons__container">
                  <PokemonsList filterPokemons={this.filterPokemons()}/>
                </div>
                <div className="quarter-circle-bottom-left"></div>
                <div className="quarter-circle-bottom-right"></div>
              </main>
            </Fragment>
           )} /> 

          <Route path="/PokemonCard/:id" render={props => (<PokemonCard loading={loadingList}match={props.match} pokemonsArray={pokemonsArray} /> )} />
        </Switch> 
      </div>
    );
  }
}


export default App;
