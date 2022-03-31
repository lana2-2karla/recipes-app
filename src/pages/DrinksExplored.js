import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const DrinksExplore = () => {
  const isVisible = false;

  return (
    <div>
      <Header
        label="Explore Drinks"
        isVisible={ isVisible }
      />
      <Footer />
    </div>
  );
};

export default DrinksExplore;
