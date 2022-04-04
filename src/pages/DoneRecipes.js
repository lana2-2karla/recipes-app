import React from 'react';
import Header from '../components/Header';
// import ButtonsDoneAndFavorites from '../components/ButtonsDoneAndFavorites';
import CardDoneRecipes from '../components/CardDoneRecipes';

const DoneRecipes = () => {
  const isVisible = false;

  return (
    <div>
      <Header
        label="Done Recipes"
        isVisible={ isVisible }
      />
      <CardDoneRecipes />

    </div>
  );
};

export default DoneRecipes;
