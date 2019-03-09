import React, { Component } from 'react';

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

export default Filter;