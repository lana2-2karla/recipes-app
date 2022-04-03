import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonsDoneAndFavorites from './ButtonsDoneAndFavorites';
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

  function handleClick() {
    const url = window.location.href;
    const newUrl = url.replace('/in-progress', '');
    navigator.clipboard.writeText(newUrl);
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
            to={ `/${recipe.type}/${recipe.id}` }
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

          <input
            data-testid={ `${index}-horizontal-share-btn` }
            type="image"
            alt="share button"
            src={ shareIcon }
            onClick={ handleClick }
          />
          {isCopied ? <p>Link copied</p> : false}

          {/* se a receita é uma comida, renderiza a categoria, nacionalidade,

          se não, renderiza se é alcooliza ou não */}

          <p data-testid={ `${index}-horizontal-top-text` }>
            {recipe.type === 'food'
              ? `${recipe.nationality} - ${recipe.category}` : `${recipe.alcoholicOrNot}`}
          </p>

          {/* se a receita for comida, renderiza as tags */}
          {recipe.type === 'food'
            ? (recipe.tags.map((tagName) => (
              <p data-testid={ `${index}-${tagName}-horizontal-tag` }>
                {tagName}
              </p>))) : ''}

        </div>
      ))}
    </div>
  );
};

export default CardDoneRecipes;
