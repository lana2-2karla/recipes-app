import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
// import { Card } from 'react-bootstrap';

export default CardRecipes = (infoRecipes) => {
  const {index, id, name, src} = infoRecipes;
  return (
    <Link
      data-testid={ `${index}-recipe-card` }
      to={ type === 'foods'? `/foods/${id}`: `/drinks/${id}` }
    >
      <img
        src={ src }
        data-testid={`${index}-card-img`}
        alt={ name }
      />
      <h2
        data-testid={`${index}-card-name`}
      >{name}</h2>
    </Link>
    );
}

CardRecipes.propTypes = {
  infoRecipes: string.isRequired,
}