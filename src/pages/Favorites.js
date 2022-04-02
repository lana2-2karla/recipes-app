import React from 'react';
import Header from '../components/Header';
import ButtonsDoneAndFavorites from '../components/ButtonsDoneAndFavorites';

const Favorites = () => {
  const isVisible = false;

  return (
    <>
      <Header
        label="Favorite Recipes"
        isVisible={ isVisible }
      />
      <ButtonsDoneAndFavorites />
    </>
  );
};

export default Favorites;
