import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";

class PokemonsDetail extends Component {
    render() {
        const { image, id, name, types} = this.props;
        return(
            <Fragment>
                <div className="Image__container">
                    <img className="Pokemon__picture" alt="pokemon" src={image}></img>
                    <p className="pokemon__order">id / {id}</p>
                </div>
                <p className="Pokemon__name">{name}</p>
                <ul className="Pokemon__types">
                    {types.map((item, index)=> {
                        return(
                            <li className="Ability" key={index}>{item.type.name} </li>
                        )
                        })}
                </ul>
            </Fragment>
        );
    }
}

PokemonsDetail.propTypes = {
    image: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    abilities: PropTypes.array
};

export default PokemonsDetail;