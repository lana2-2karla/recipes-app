import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => {
  const history = useHistory();
  return (
    <div
      data-testid="footer"
      className="footer"
      style={ {
        position: 'fixed',
        bottom: '0px',
      } }
    >
      <input
        data-testid="drinks-bottom-btn"
        name="drinks-btn"
        type="image"
        onClick={ () => history.push('/drinks') }
        src={ drinkIcon }
        alt="dinks"
      />
      <input
        data-testid="explore-bottom-btn"
        name="explore-btn"
        type="image"
        onClick={ () => history.push('/explore') }
        src={ exploreIcon }
        alt="explore"
      />
      <input
        data-testid="food-bottom-btn"
        name="food-btn"
        type="image"
        onClick={ () => history.push('/foods') }
        src={ mealIcon }
        alt="food"
      />
    </div>
  );
};
export default Footer;
