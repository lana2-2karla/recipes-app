import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import Header from '../components/Header';
import ButtonsDoneAndFavorites from '../components/ButtonsDoneAndFavorites';
import shareIcon from '../images/shareIcon.svg';
import blackHeartPicture from '../images/blackHeartIcon.svg';
import { removeFavoriteFromLocal } from '../services/index';

const Favorites = () => {
  const isVisible = false;
  const [recipesFromStorage, setRecipesFromStorage] = useState([]);
  const [recipesToRender, setRecipesToRender] = useState([]);
  const [isCopied, setCopied] = useState();

  useEffect(() => {
    const getRecipesFromStorage = () => {
      const doneRecipes = localStorage.getItem('favoriteRecipes');
      if (doneRecipes) {
        const results = JSON.parse(localStorage.getItem('favoriteRecipes'));
        console.log(results);
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
    const newUrl = url.replace('/favorite-recipes', '');
    copy(`${newUrl}/${type}s/${id}`);
    setCopied(id);
  }

  const handleFavorite = (id) => {
    const disfavor = recipesToRender.filter((item) => item.id !== id);
    setRecipesToRender(disfavor);
    removeFavoriteFromLocal(id);
  };

  return (
    <div>
      <Header
        label="Favorite Recipes"
        isVisible={ isVisible }
      />
      <ButtonsDoneAndFavorites
        handleFilter={ handleFilter }
      />
      { recipesToRender.map((
        {
          id,
          type,
          name,
          image,
          nationality,
          category,
          alcoholicOrNot,
        }, index,
      ) => (

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
          { isCopied === id && <p>Link copied!</p> }

          <input
            data-testid={ `${index}-horizontal-share-btn` }
            type="image"
            alt="share button"
            src={ shareIcon }
            onClick={ () => handleShare(id, type) }
          />

          <input
            data-testid={ `${index}-horizontal-favorite-btn` }
            name="favorite-btn"
            value="btnfav"
            type="image"
            onClick={ () => handleFavorite(id) }
            src={ blackHeartPicture }
            alt="favorite"
          />

          <p data-testid={ `${index}-horizontal-top-text` }>
            {type === 'food'
              ? `${nationality} - ${category}` : `${alcoholicOrNot}`}
          </p>

        </div>

      ))}
    </div>

  );
};

export default Favorites;
