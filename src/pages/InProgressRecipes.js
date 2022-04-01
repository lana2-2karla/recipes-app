import React from 'react';
import DetailsWithoutIng from '../components/DetailsWithoutIngredients';
import Ingredients from '../components/Ingredients';

const InProgressRecipes = () => {
  const isVisible = false;

  return (
    <div>
      <DetailsWithoutIng />
      <Ingredients />
      <button
        data-testid="finish-recipe-btn"
        // onClick={ }
        disabled={ isVisible }
        type="button"
      >
        Finish Recipe
      </button>
    </div>
  );
};

export default InProgressRecipes;
