import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { recipeStarted } from '../store/actions';
import sharePicture from '../images/shareIcon.svg';
// import blackHeartPicture from '../images/blackHeartIcon.svg';
import whiteHeartPicture from '../images/whiteHeartIcon.svg';
import requestServer from '../services/requests';
import '../index.css';

const DetailsFoods = () => {
  const { params: { id } } = useRouteMatch();
  const [ingredient, setIngredient] = useState([]);
  const [data, setData] = useState({
    strMeal: '',
    strCategory: '',
    strInstructions: '',
    strMealThumb: '',
    strYoutube: '',
  });
  const [drinks, setDrinks] = useState([]);
  const dispatch = useDispatch();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  console.log(data);
  const arrIngredients = (details) => {
    const arrValues = Object.values(details);
    const twenty = 20;
    const nine = 9;
    const twentyNine = 29;
    const ingredients = [];
    for (let index = nine; index < twentyNine; index += 1) {
      if (arrValues[index] !== null && arrValues[index].length) {
        ingredients.push(`${arrValues[index]} 
          ${arrValues[index + twenty]}`);
      }
    }
    return ingredients;
  };

  useEffect(() => {
    (async () => {
      const six = 6;
      const { meals } = await requestServer(url);
      const resultDrinks = await requestServer(urlDrinks);
      const detailRecipe = meals[0];
      const recomendationDrinks = resultDrinks.drinks.slice(0, six);
      console.log(recomendationDrinks);
      setData(detailRecipe);
      console.log(data);
      setDrinks(recomendationDrinks);
      setIngredient(arrIngredients(detailRecipe));
      dispatch(recipeStarted(detailRecipe));
    })();
  }, []);
  console.log({ data });

  return (
    <div>
      <img data-testid="recipe-photo" src={ data.strMealThumb } alt={ data.strMeal } />
      <h2 data-testid="recipe-title">{ data.strMeal }</h2>
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
      <p data-testid="recipe-category">{ data.strCategory }</p>
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
      <iframe
        data-testid="video"
        title="video"
        src={ `https://www.youtube.com/embed/${data.strYoutube.split('watch?v=')[1]}` }
      />
      <h3>Recommended</h3>
      <div className="content-scroll">
        {
          drinks.map((drink, index) => (
            <div
              className="scroll-drinks"
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
              />
              <p>{ drink.strAlcoholic }</p>
              <p data-testid={ `${index}-recomendation-title` }>{ drink.strDrink }</p>
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

export default DetailsFoods;
