import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import ButtonsDoneAndFavorites from './ButtonsDoneAndFavorites';
import shareIcon from '../images/shareIcon.svg';
// import { doneRecipe } from '../services/checkLocalStorageInfo';

const CardDoneRecipes = () => {
  const [recipesFromStorage, setRecipesFromStorage] = useState([]);
  const [recipesToRender, setRecipesToRender] = useState([]);
  const [isCopied, setCopied] = useState(false);

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

  function handleClick(id, type) {
    console.log(isCopied);
    const url = window.location.href;
    const newUrl = url.replace('/done-recipes', '');
    copy(`${newUrl}/${type}s/${id}`);
    setCopied(true);
  }

  return (
    <div>
      <ButtonsDoneAndFavorites
        handleFilter={ handleFilter }
      />
      {recipesToRender.map((recipe, index) => (
        <div key={ index }>
          <Link
            data-testid={ `${index}-recipe-card` }
            to={ `/${recipe.type}s/${recipe.id}` }
          >
            <img
              src={ recipe.image }
              alt="done recipe"
              data-testid={ `${index}-horizontal-image` }
            />

            <p
              data-testid={ `${index}-horizontal-name` }
            >
              {recipe.name}
            </p>
          </Link>

          <p
            data-testid={ `${index}-horizontal-done-date` }
          >
            {recipe.doneDate}

          </p>
          {isCopied ? <p>Link copied</p> : false}

          <input
            data-testid={ `${index}-horizontal-share-btn` }
            type="image"
            alt="share button"
            src={ shareIcon }
            onClick={ () => handleClick(recipe.id, recipe.type) }
          />

          <p data-testid={ `${index}-horizontal-top-text` }>
            {recipe.type === 'food'
              ? `${recipe.nationality} - ${recipe.category}` : `${recipe.alcoholicOrNot}`}
          </p>

          <p
            data-testid={ `${index}-${recipe.tags}-horizontal-tag` }
          >
            { recipe.tags }
          </p>

        </div>
      ))}
    </div>
  );
};

export default CardDoneRecipes;
