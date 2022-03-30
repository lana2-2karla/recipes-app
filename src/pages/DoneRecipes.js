import React from 'react';
import Header from '../components/Header';

const DoneRecipes = () => {
  const isVisible = false;

  return (
    <Header
      label="Done Recipes"
      isVisible={ isVisible }
    />
  );
};

export default DoneRecipes;
