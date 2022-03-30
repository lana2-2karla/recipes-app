import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const IngredientsExploredFoods = () => {
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

export default IngredientsExploredFoods;
