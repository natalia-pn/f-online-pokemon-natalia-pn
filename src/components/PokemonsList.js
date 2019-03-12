import React, { Component } from 'react';
import PokemonsDetail from './PokemonsDetail';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

class PokemonsList extends Component {
    render() {
        const { filterPokemons } = this.props;

        return(
            <ul className="Pokemons__list">
                {filterPokemons.map(pok=> {
                    return(
                        <li className="Pokemon__element" key={pok.id}>
                            <Link to={`/PokemonCard/${pok.id}`} className="route__link">
                            <PokemonsDetail image={pok.sprites.front_default} id={pok.id} name= {pok.name} types={pok.types} />
                            </Link>
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