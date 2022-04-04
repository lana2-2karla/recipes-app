import React from 'react';
import PropTypes from 'prop-types';

const ButtonsDoneAndFavorites = ({ handleFilter }) => (
  <div>
    <button
      type="button"
      data-testid="filter-by-all-btn"
      value="all"
      onClick={ handleFilter }
    >
      All
    </button>
    <button
      type="button"
      value="food"
      data-testid="filter-by-food-btn"
      onClick={ handleFilter }
    >
      Food
    </button>
    <button
      type="button"
      value="drink"
      data-testid="filter-by-drink-btn"
      onClick={ handleFilter }
    >
      Drinks

    </button>
  </div>

);

ButtonsDoneAndFavorites.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default ButtonsDoneAndFavorites;
