import React, { Component } from 'react';
import PokemonsDetail from './PokemonsDetail';
import PropTypes from "prop-types";


class PokemonsList extends Component {
    render() {
        const { filterPokemons } = this.props;

        console.log(filterPokemons)
        return(
            <ul className="Pokemons__list">
                {filterPokemons.map(pok=> {
                return(
                    <li className="Pokemon__element" key={pok.id}>
                        <PokemonsDetail image={pok.sprites.front_default} id={pok.id} name= {pok.name} types={pok.types} />
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