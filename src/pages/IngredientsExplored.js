import React from 'react';
import CardByIngredient from '../components/CardsByIngredient';
import Footer from '../components/Footer';
import Header from '../components/Header';

const IngredientsExplored = () => (
  <div>
    <Header
      label="Explore Ingredients"
    />
    <CardByIngredient />
    <Footer />
  </div>
);

export default IngredientsExplored;
