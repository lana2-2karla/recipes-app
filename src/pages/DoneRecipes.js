import React from 'react';
import Header from '../components/Header';
import CardDoneRecipes from '../components/CardDoneRecipes';
import ButtonsDoneAndFavorites from '../components/ButtonsDoneAndFavorites';

const DoneRecipes = () => {
  const isVisible = false;

  return (
    <>
      <Header
        label="Done Recipes"
        isVisible={ isVisible }
      />
      <ButtonsDoneAndFavorites />
      <CardDoneRecipes /> 

    </>
  );
};

export default DoneRecipes;
