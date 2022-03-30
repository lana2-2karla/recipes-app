import React from 'react';
import Header from '../components/Header';

const Favorites = () => {
  const isVisible = false;

  return (
    <Header
      label="Favorite Recipes"
      isVisible={ isVisible }
    />
  );
};

export default Favorites;
