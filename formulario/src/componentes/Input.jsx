import React from 'react';

const Input = ({ value, onChange, placeholder, name }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            className="input"
        />
    );
};

export default Input;

