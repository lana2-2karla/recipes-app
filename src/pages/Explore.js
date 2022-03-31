import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Explore = () => {
  const isVisible = false;
  const history = useHistory();

  return (
    <div>
      <Header
        label="Explore "
        isVisible={ isVisible }
      />
      <div>
        <button
          data-testid="explore-foods"
          type="button"
          name="btn-foods"
          value="btn-explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          data-testid="explore-drinks"
          type="button"
          name="btn-drink"
          value="btn-explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
