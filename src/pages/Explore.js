import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Explore = () => {
  const isVisible = false;

  return (
    <div>
      <Header
        label="Explore "
        isVisible={ isVisible }
      />
      <Footer />
    </div>
  );
};

export default Explore;
