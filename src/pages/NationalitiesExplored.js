import React from 'react';
import Header from '../components/Header';

const NationalitiesExplored = () => {
  const isVisible = true;

  return (
    <Header
      label="Explore Nationalities"
      isVisible={ isVisible }
    />
  );
};

export default NationalitiesExplored;
