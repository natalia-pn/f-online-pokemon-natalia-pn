import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";

class PokemonCard extends Component {
    render() {
        const { pokemonsArray, loading } = this.props;
        console.log(this.props)

         if(loading) {
            return "Loading";
         }

         const pokemonId =  this.props.match.params.id;
         const pokemon = (pokemonsArray || [] ).find(function(element) {
             console.log(element.id, '    ', pokemonId)
            return element.id === parseInt(pokemonId);
          });
          
          console.log(pokemon)
        if(pokemon) {
            const {sprites, id, name, height, weight, types, abilities } = pokemon;

            return(
                <Fragment>
                    <div className="Image__container">
                        <img className="Pokemon__picture" alt="pokemon" src={sprites.front_default}></img>
                        <p className="pokemon__order">id / {id}</p>
                    </div>
                    <div className="Pokemon__basic-info">
                        <p className="Pokemon__name">{name}</p>
                        <p className="Pokemon__height">{height}</p>
                        <p className="Pokemon__weight">{weight}</p>
                    </div>
                    <div className="Pokemon__behaviour">
                        <ul className="Pokemon__types">
                            {types.map((item, index)=> {
                                return(
                                    <li className="Ability" key={index}>{item.type.name} </li>
                                )
                            })}
                        </ul>
                        <ul className="Pokemon__abilities">
                            {abilities.map((item, index)=> {
                                return(
                                    <li className="Ability" key={index}>{item.ability.name} 
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </Fragment>
            );
         }

         return "There's been an error"

        
    }
}

PokemonCard.propTypes = {
    pokemonsArray: PropTypes.array,
};

export default PokemonCard;