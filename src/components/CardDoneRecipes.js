import React from 'react';
import shareIcon from '../images/shareIcon.svg';
// import { useSelector } from 'react-redux';

const CardDoneRecipes = () => {
  
 /*  const handleClick = () => {
    const copy = require('clipboard-copy')
  } */

  return (
  <>
    <img
      src=""
      alt=""
      data-testid={ `${index}-horizontal-image` }
    />
    <h2
      data-testid={ `${index}-horizontal-top-text` }
    >
      Categoria
    </h2>
    <p
      data-testid={ `${index}-horizontal-name` }
    >
      Nome
    </p>
    <p
      data-testid={ `${index}-horizontal-done-date` }
    />
    <input
      data-testid={ `${index}-horizontal-share-btn` }
      type="image"
      alt="ícone de compartilhamento"
      src={ shareIcon }
      onClick={ handleClick }
    />
    <p
      data-testid={ `${index}-${tagName}-horizontal-tag` }
    >
      tags
    </p>
    )
  </>

};

export default CardDoneRecipes;
