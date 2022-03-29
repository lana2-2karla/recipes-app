import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { func } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SearchHeader = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filterBy, setFilterBy] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onInputChange = ({ target: { value } }, callback) => {
    callback(value);
  };

  const verifyType = () => {
    let type = '';
    const { pathname } = history.location;
    if (searchInput === 'ingredient') type = 'i';
    if (searchInput === 'name') type = 's';
    else type = 'f';

    if(pathname === '/foods'){
      return `https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${searchInput}`;
    }
    if(pathname === '/drinks'){
      return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${type}=${searchInput}`
    }
  };

  const requestAPI = async (endpoint) => {
    const response = await fetch(endpoint);
    const { results } = await response.json();
    dispatch(setSearchBar(results));
  };

  const handleClick = () => {
    if (filterBy === 'firstLetter' && searchInput.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const url = verifyType();
      requestAPI(url);
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

// const mapDispatchToProps = (dispatch) => ({
//   setSearchBar: (resultsAPI) => dispatch(saveAPI(resultsAPI)),
// });

SearchHeader.propTypes = {
  setSearchBar: func.isRequired,
};

export default SearchHeader;

// export default connect(null, mapDispatchToProps)(SearchHeader);
