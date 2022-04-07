import React from 'react';
import Header from '../components/Header';
import CardDoneRecipes from '../components/CardDoneRecipes';

const DoneRecipes = () => (
  <div>
    <Header
      label="Done Recipes"
    />
    <CardDoneRecipes />

  </div>
);

export default DoneRecipes;
