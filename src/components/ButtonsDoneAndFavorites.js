import React from 'react';

const ButtonsDoneAndFavorites = () => (
  <>
    <button
      type="button"
      data-testid="filter-by-all-btn"
    >
      All
    </button>
    <button
      type="button"
      data-testid="filter-by-food-btn"
    >
      Food
    </button>
    <button
      type="button"
      data-testid="filter-by-drink-btn"
    >
      Drinks

    </button>
  </>

);

export default ButtonsDoneAndFavorites;
