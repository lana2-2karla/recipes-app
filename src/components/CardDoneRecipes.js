import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import ButtonsDoneAndFavorites from './ButtonsDoneAndFavorites';
import shareIcon from '../images/shareIcon.svg';

const CardDoneRecipes = () => {
  const [recipesFromStorage, setRecipesFromStorage] = useState([]);
  const [recipesToRender, setRecipesToRender] = useState([]);
  const [isCopied, setCopied] = useState();

  useEffect(() => {
    const getRecipesFromStorage = () => {
      const doneRecipes = localStorage.getItem('doneRecipes');
      if (doneRecipes) {
        const results = JSON.parse(localStorage.getItem('doneRecipes'));
        setRecipesFromStorage(results);
        setRecipesToRender(results);
      }
    };
    getRecipesFromStorage();
  }, []);

  const handleFilter = ({ target }) => {
    const { value } = target;

    if (value === 'food') {
      const filteredByFood = recipesFromStorage
        .filter((recipe) => (recipe.type === 'food'));
      setRecipesToRender(filteredByFood);
    }

    if (value === 'drink') {
      const filteredByDrink = recipesFromStorage
        .filter((recipe) => (recipe.type === 'drink'));
      setRecipesToRender(filteredByDrink);
    }

    if (value === 'all') {
      setRecipesToRender(recipesFromStorage);
    }
  };

  function handleShare(id, type) {
    const url = window.location.href;
    const newUrl = url.replace('/done-recipes', '');
    copy(`${newUrl}/${type}s/${id}`);
    setCopied(id);
  }

  function handleTags(tags) {
    if (typeof tags === 'string') {
      return tags.split(',');
    }
    return tags;
  }

  return (
    <div>
      <ButtonsDoneAndFavorites
        handleFilter={ handleFilter }
      />

      {recipesToRender.map(({ id, type, name, image, doneDate, tags,
        nationality, category, alcoholicOrNot },
      index) => (
        <div key={ index }>
          <Link
            data-testid={ `${index}-recipe-card` }
            to={ `/${type}s/${id}` }
          >
            <img
              src={ image }
              alt="done recipe"
              data-testid={ `${index}-horizontal-image` }
            />

            <p
              data-testid={ `${index}-horizontal-name` }
            >
              {name}
            </p>
          </Link>

          <p
            data-testid={ `${index}-horizontal-done-date` }
          >
            {doneDate}

          </p>

          <input
            data-testid={ `${index}-horizontal-share-btn` }
            type="image"
            alt="share button"
            src={ shareIcon }
            onClick={ () => handleShare(id, type) }
          />

          {isCopied === id && <p>Link copied!</p>}

          <p data-testid={ `${index}-horizontal-top-text` }>
            {type === 'food'
              ? `${nationality} - ${category}` : `${alcoholicOrNot}`}
          </p>

          { tags && handleTags(tags).length && handleTags(tags).map((tag, index2) => (
            <p
              key={ index2 }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              { tag }
            </p>
          ))}

        </div>
      ))}

    </div>
  );
};

export default CardDoneRecipes;
