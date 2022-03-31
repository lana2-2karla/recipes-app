import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FoodsExplored = () => {
  const isVisible = false;

  return (
    <div>
      <Header
        label="Explore Foods"
        isVisible={ isVisible }
      />
      <Footer />
    </div>
  );
};

export default FoodsExplored;
