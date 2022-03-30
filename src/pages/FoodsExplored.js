import React from 'react';
import Header from '../components/Header';

const FoodsExplored = () => {
  const isVisible = false;

  return (
    <Header
      label="Explore Foods"
      isVisible={ isVisible }
    />
  );
};

export default FoodsExplored;
