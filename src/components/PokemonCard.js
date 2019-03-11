import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";

class PokemonCard extends Component {
    render() {
        const { pokemonsArray } = this.props;
        const pokemon = pokemonsArray.map(pok=> pok);
        return(
            <Fragment>
            <div className="Image__container">
                <img className="Pokemon__picture" alt="pokemon" src={pokemon.sprites.front_default}></img>
                <p className="pokemon__order">id / {pokemon.id}</p>
            </div>
            <div className="Pokemon__basic-info">
                <p className="Pokemon__name">{pokemon.name}</p>
                <p className="Pokemon__height">{pokemon.height}</p>
                <p className="Pokemon__weight">{pokemon.weight}</p>
            </div>
            <div className="Pokemon__behaviour">
                <ul className="Pokemon__types">
                    {pokemon.types.map((item, index)=> {
                        return(
                            <li className="Ability" key={index}>{item.type.name} </li>
                        )
                        })}
                </ul>
                <ul className="Pokemon__abilities">
                    {pokemon.abilities.map((item, index)=> {
                        return(
                            <li className="Ability" key={index}>{item.ability.name} </li>
                        )
                        })}
                </ul>
            </div>
        </Fragment>

        );
    }

}

export default PokemonCard;