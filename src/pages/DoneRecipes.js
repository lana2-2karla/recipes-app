import React from 'react';
import Header from '../components/Header';
// import CardDoneRecipes from '../components/CardDoneRecipes';

const DoneRecipes = () => {
  const isVisible = false;

  return (
    <>
      <Header
        label="Done Recipes"
        isVisible={ isVisible }
      />
      {/* <ButtonsDoneAndFavorites /> */}
    </>
  );
};

export default DoneRecipes;
