import React from 'react';
import './searchBox.css';

const SearchBox = ({ searchChange }) => {
    return(
        <div className="seachContainer">
            <input
                className="searchbox"
                type="search"
                placeholder="Search Product"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;