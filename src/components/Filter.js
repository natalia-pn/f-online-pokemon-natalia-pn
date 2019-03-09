import React, { Component } from 'react';
import PropTypes from "prop-types";

class Filter extends Component {
    render() {
        const {getSearchValue} = this.props;
        return(
    
        <label className="Search-field__label">
            <input className="Search-field"type="text" onKeyUp={getSearchValue}></input>
        </label>
        );
    }
}

Filter.propTypes = {
    getSearchValue: PropTypes.func,
};

export default Filter;