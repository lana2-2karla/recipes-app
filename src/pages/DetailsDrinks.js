import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { recipeStarted } from '../store/actions';
import sharePicture from '../images/shareIcon.svg';
// import blackHeartPicture from '../images/blackHeartIcon.svg';
import whiteHeartPicture from '../images/whiteHeartIcon.svg';
import requestServer from '../services/requests';
import '../index.css';

const DetailsDrinks = () => {
  const { params: { id } } = useRouteMatch();
  const [ingredient, setIngredient] = useState([]);
  const [data, setData] = useState({
    strDrink: '',
    strAlcoholic: '',
    strInstructions: '',
    strDrinkThumb: '',
  });
  const [foods, setFoods] = useState([]);
  const dispatch = useDispatch();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const urlFoods = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  // console.log(url);
  const arrIngredients = (details) => {
    const arrValues = Object.values(details);
    const fifteen = 15;
    const seventeen = 17;
    const thirtyTwo = 32;
    const ingredients = [];
    for (let index = seventeen; index < thirtyTwo; index += 1) {
      if (arrValues[index] !== null && arrValues[index].length) {
        ingredients.push(`${arrValues[index]}
          ${arrValues[index + fifteen]}`);
      }
      console.log(arrValues[index]);
    }
    return ingredients;
  };

  useEffect(() => {
    (async () => {
      const six = 6;
      const { drinks } = await requestServer(url);
      const resultFoods = await requestServer(urlFoods);
      const detailRecipe = drinks[0];
      const recomendationFoods = resultFoods.meals.slice(0, six);
      setData(detailRecipe);
      console.log(data);
      setFoods(recomendationFoods);
      setIngredient(arrIngredients(detailRecipe));
      dispatch(recipeStarted(detailRecipe));
    })();
  }, []);

  return (
    <div>
      <img data-testid="recipe-photo" src={ data.strDrinkThumb } alt={ data.strDrink } />
      <h2 data-testid="recipe-title">{ data.strDrink }</h2>
      <input
        data-testid="share-btn"
        name="share-btn"
        type="image"
        // onClick={ handleClick }
        src={ sharePicture }
        alt="share"
      />
      <input
        data-testid="favorite-btn"
        name="favorite-btn"
        type="image"
        // onClick={ handleClick }
        src={ whiteHeartPicture }
        alt="favorite"
      />
      <p data-testid="recipe-category">{ data.strAlcoholic }</p>
      <ul>
        {
          ingredient.map((item, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { item }

            </li>
          ))
        }
      </ul>
      <h3>Instructions</h3>
      <p data-testid="instructions">{data.strInstructions}</p>
      <h3>Recommended</h3>
      <div className="content-scroll">
        {
          foods.map((food, index) => (
            <div
              className="scroll-drinks"
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                src={ food.strMealThumb }
                alt={ food.strMeal }
              />
              <p>{ food.strMeal }</p>
            </div>
          ))
        }
      </div>
      <button
        className="btn-fixed"
        data-testid="start-recipe-btn"
        type="button"
      >
        Start Recipe
      </button>
    </div>
  );
};

export default DetailsDrinks;
