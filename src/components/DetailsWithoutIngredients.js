import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import requestServer from '../services/requests';
import { recipeStarted } from '../store/actions';
import Ingredients from './Ingredients';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import verifyType from '../services/createURL';
import { checkInfoInLocal, toggleFavorite } from '../services/checkLocalStorageInfo';

const DetailsWithoutIng = () => {
  const dispatch = useDispatch();
  const { params: { id } } = useRouteMatch();
  const { location: { pathname } } = useHistory();
  const [allInfo, setAllInfo] = useState([]);
  const [isCopied, setCopied] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [data, setdata] = useState({ title: '',
    photo: '',
    category: '',
    instructions: '' });
  const handleShare = () => {
    const url = window.location.href;
    const newUrl = url.replace('/in-progress', '');
    navigator.clipboard.writeText(newUrl);
    setCopied(true);
  };
  const handleFavorite = () => {
    const checkToggle = !isFavorited;
    setIsFavorited(checkToggle);
    toggleFavorite({ id, favorite: allInfo });
  };
  useEffect(() => {
    const requestAPI = async () => {
      const results = await requestServer(verifyType(id, pathname));
      const type = (results.meals ? results.meals : results.drinks);
      dispatch(recipeStarted(type[0]));
      setAllInfo(type[0]);
      setIsFavorited(checkInfoInLocal(id));
      setdata((previous) => ({ ...previous,
        category: type[0].strCategory,
        instructions: type[0].strInstructions }));
      if (pathname.includes('/foods/')) {
        setdata((previous) => ({ ...previous,
          title: type[0].strMeal,
          photo: type[0].strMealThumb }));
      }
      if (pathname.includes('/drinks/')) {
        setdata((previous) => ({ ...previous,
          title: type[0].strDrink,
          photo: type[0].strDrinkThumb }));
      }
    };
    requestAPI();
  }, []);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ data.photo }
        alt="Recipe"
      />
      <h3 data-testid="recipe-title">
        { data.title }
      </h3>
      <input
        data-testid="share-btn"
        onClick={ handleShare }
        type="image"
        src={ shareIcon }
        alt="Share"
      />
      <input
        data-testid="favorite-btn"
        onClick={ handleFavorite }
        type="image"
        src={ !isFavorited ? whiteHeartIcon : blackHeartIcon }
        alt="Favorite"
      />
      { isCopied ? <p>Link copied!</p> : false}
      <h4 data-testid="recipe-category">{ data.category }</h4>
      <p data-testid="instructions">{ data.instructions }</p>
      <Ingredients { ...allInfo } id={ id } label={ pathname } />
    </div>
  );
};

export default DetailsWithoutIng;
