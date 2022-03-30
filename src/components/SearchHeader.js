import { func } from 'prop-types';
import React, { useState } from 'react';

const SearchHeader = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const [filterBy, setFilterBy] = useState('');
  const { handleDataResults } = props;

  const onInputChange = ({ target: { value } }, callback) => {
    callback(value);
  };

  const handleClick = () => {
    if (filterBy === 'firstLetter' && searchInput.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      handleDataResults({ searchInput, filterBy });
    }
  };

  return (
    <div>
      <label htmlFor="searchInput">
        <input
          id="searchInput"
          name="search"
          data-testid="search-input"
          value={ searchInput }
          type="text"
          onChange={ (e) => onInputChange(e, setSearchInput) }
        />
      </label>
      <label htmlFor="ingredient">
        <input
          id="ingredient"
          name="filter"
          data-testid="ingredient-search-radio"
          value="ingredient"
          type="radio"
          onChange={ (e) => onInputChange(e, setFilterBy) }
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          id="name"
          name="filter"
          data-testid="name-search-radio"
          value="name"
          type="radio"
          onChange={ (e) => onInputChange(e, setFilterBy) }
        />
        Name
      </label>
      <label htmlFor="firstLetter">
        <input
          id="firstLetter"
          name="filter"
          data-testid="first-letter-search-radio"
          value="firstLetter"
          type="radio"
          onChange={ (e) => onInputChange(e, setFilterBy) }
        />
        First Letter
      </label>
      <button
        data-testid="exec-search-btn"
        onClick={ handleClick }
        type="button"
      >
        Search
      </button>
    </div>
  );
};

SearchHeader.propTypes = {
  handleDataResults: func.isRequired,
};

export default SearchHeader;
