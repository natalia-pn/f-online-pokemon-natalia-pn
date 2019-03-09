import React, { Component } from 'react';
import PokemonsDetail from './components/PokemonsDetail';
import PropTypes from "prop-types";

class PokemonsList extends Component {
    render() {
        const { pokemonsArray } = this.props;
        return(
            <ul className="Pokemons__list">
                {pokemonsArray.map(pok=> {
                return(
                    <li className="Pokemon__element" key={pok.id}>
                        <PokemonsDetail />
                    </li>
                );
                })}
          </ul> 
        );
    }
}

PokemonsList.propTypes = {
    pokemonsArray: PropTypes.array,
};

export default PokemonsList;