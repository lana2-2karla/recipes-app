import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/card.css';
// import { Card } from 'react-bootstrap';

const CardRecipes = (infoRecipes) => {
  const { index, type } = infoRecipes;
  let page;
  let name;
  let img;
  if (type === 'foods') {
    const { idMeal, strMeal, strMealThumb } = infoRecipes;
    page = `/foods/${idMeal}`;
    name = strMeal;
    img = strMealThumb;
  }

  if (type === 'drinks') {
    const { idDrink, strDrink, strDrinkThumb } = infoRecipes;
    page = `/drinks/${idDrink}`;
    name = strDrink;
    img = strDrinkThumb;
  }
  return (
    <Link
      data-testid={ `${index}-recipe-card` }
      to={ page }
    >
      <img
        src={ img }
        data-testid={ `${index}-card-img` }
        alt={ name }
      />
      <h3
        data-testid={ `${index}-card-name` }
      >
        { name }
      </h3>
    </Link>
  );
};
CardRecipes.propTypes = {
  infoRecipes: PropTypes.shape({
    index: number.isRequired,
    idMeal: number.isRequired,
    strMeal: string.isRequired,
    strMealThumb: string.isRequired,
  }).isRequired,
};

export default CardRecipes;
