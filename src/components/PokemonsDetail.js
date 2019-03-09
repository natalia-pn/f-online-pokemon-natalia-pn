import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";

class PokemonsDetail extends Component {
    render() {
        return(
            <Fragment>
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
            </Fragment>

        );
    }
}




export default PokemonsDetail;