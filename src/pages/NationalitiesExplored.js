import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const NationalitiesExplored = () => {
  const isVisible = true;

  return (
    <div>
      <Header
        label="Explore Nationalities"
        isVisible={ isVisible }
      />
      <Footer />
    </div>
  );
};

export default NationalitiesExplored;
