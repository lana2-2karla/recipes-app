import React from 'react';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
// import { useSelector } from 'react-redux';

const CardDoneRecipes = () => {
  const handleClick = () => {
    clipboardCopy(window.location.href);
    global.alert('Link copied!');
  };

  return (
    <div>
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
      >
        Data

      </p>
      <input
        data-testid={ `${index}-horizontal-share-btn` }
        type="image"
        alt="share button"
        src={ shareIcon }
        onClick={ handleClick }
      />
      <p
        data-testid={ `${index}-${tagName}-horizontal-tag` }
      >
        tags
      </p>
    </div>
  );
};

export default CardDoneRecipes;
