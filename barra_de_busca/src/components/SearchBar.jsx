import React from 'react';

const SearchBar = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Buscar carro..."
            className="search-bar"
        />
    );
};

export default SearchBar;
