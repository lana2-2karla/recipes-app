import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import requestServer from '../services/requests';
import { recipeStarted } from '../store/actions';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const DetailsWithoutIng = () => {
  const dispatch = useDispatch();
  const { params: { id } } = useRouteMatch();
  const { location: { pathname } } = useHistory();
  const [data, setdata] = useState({ title: '',
    photo: '',
    category: '',
    instructions: '' });

  const verifyType = () => {
    let type = '';
    if (pathname.includes('/foods/')) type = 'themealdb';
    if (pathname.includes('/drinks/')) type = 'thecocktaildb';

    return `https://www.${type}.com/api/json/v1/1/lookup.php?i=${id}`;
  };

  useEffect(() => {
    const requestAPI = async () => {
      const results = await requestServer(verifyType());
      const type = (results.meals ? results.meals : results.drinks);
      dispatch(recipeStarted(type[0]));
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
        // onClick={ }
        type="image"
        src={ shareIcon }
        alt="Share"
      />
      <input
        data-testid="favorite-btn"
        // onClick={ }
        type="image"
        src={ whiteHeartIcon }
        alt="Favorite"
      />
      <h4 data-testid="recipe-category">{ data.category }</h4>
      <p data-testid="instructions">{ data.instructions }</p>
    </div>
  );
};

export default DetailsWithoutIng;
