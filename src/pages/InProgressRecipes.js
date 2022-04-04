import React from 'react';
import ButtonFinished from '../components/ButtonFinished';
import DetailsWithoutIng from '../components/DetailsWithoutIngredients';
import Ingredients from '../components/Ingredients';

const InProgressRecipes = () => (
  <div>
    <DetailsWithoutIng />
    <Ingredients />
    <ButtonFinished />
  </div>
);

export default InProgressRecipes;
