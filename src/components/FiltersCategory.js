import React from 'react';

const FiltersCategory = (infoFilter) => {
  const { strCategory, handleDataResults } = infoFilter;

  return (
    <form className="filters-category">
      <button
        data-testid={ `${strCategory}-category-filter` }
        onClick={ () => handleDataResults({ searchInput: strCategory,
          filterBy: 'category' }) }
        type="button"
      >
        { strCategory }
      </button>
    </form>
  );
};

export default FiltersCategory;
