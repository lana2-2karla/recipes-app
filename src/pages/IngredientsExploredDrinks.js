import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const IngredientsExploredDrinks = () => {
  const isVisible = false;

  return (
    <div>
      <Header
        label="Explore Ingredients"
        isVisible={ isVisible }
      />
      <Footer />
    </div>
  );
};

export default IngredientsExploredDrinks;
