import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { recipeStarted } from '../store/actions';
import sharePicture from '../images/shareIcon.svg';
import blackHeartPicture from '../images/blackHeartIcon.svg';
import whiteHeartPicture from '../images/whiteHeartIcon.svg';
import requestServer from '../services/requests';
import '../index.css';
import { checkInfoInLocal, toggleFavorite } from '../services/checkLocalStorageInfo';
// import useIngredientsList from '../functions/useIngredientsList';

const DetailsDrinks = () => {
  const { params: { id } } = useRouteMatch();
  const [ingredient, setIngredient] = useState([]);
  const [isCopied, setCopied] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
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

  const arrIngredients = (details) => {
    const newDataIng = [];
    const newMeasure = [];
    const ingredients = [];
    const infoIngredients = Object.keys(details);
    const verifyExistIng = infoIngredients.some((item) => item.includes('strIng'));
    if (verifyExistIng) {
      infoIngredients.forEach((element, index) => {
        const newIngredient = Object.values(details)[index];
        if (element.includes('strIng')
          && newIngredient !== null && newIngredient.length) {
          newDataIng.push(newIngredient);
        }
        if (element.includes('strMeas')
          && newIngredient !== null && newIngredient.length) {
          newMeasure.push(newIngredient);
        }
      });
    }
    newDataIng.forEach((item, index) => ingredients.push(`${item}-${newMeasure[index]}`));
    // const arrValues = Object.values(details);
    // const fifteen = 15;
    // const seventeen = 17;
    // const thirtyTwo = 32;
    // const ingredients = [];
    // for (let index = seventeen; index < thirtyTwo; index += 1) {
    //   if (arrValues[index] !== null && arrValues[index].length) {
    //     ingredients.push(`${arrValues[index]}
    //       ${arrValues[index + fifteen]}`);
    //   }
    // }
    return ingredients;
  };
  const handleShare = () => {
    const urlPage = window.location.href;
    const newUrl = urlPage.replace('/in-progress', '');
    navigator.clipboard.writeText(newUrl);
    setCopied(true);
  };
  const handleFavorite = () => {
    const checkToggle = !isFavorited;
    setIsFavorited(checkToggle);
    toggleFavorite({ id, favorite: data });
  };
  useEffect(() => {
    const requestAPI = async () => {
      const six = 6;
      const { drinks } = await requestServer(url);
      const resultFoods = await requestServer(urlFoods);
      const detailRecipe = drinks[0];
      const recomendationFoods = resultFoods.meals.slice(0, six);
      setData(detailRecipe);
      setFoods(recomendationFoods);
      setIsFavorited(checkInfoInLocal(id));
      setIngredient(arrIngredients(detailRecipe));
      dispatch(recipeStarted(detailRecipe));
    };
    requestAPI();
  }, []);

  return (
    <div>
      <img data-testid="recipe-photo" src={ data.strDrinkThumb } alt={ data.strDrink } />
      <h2 data-testid="recipe-title">{ data.strDrink }</h2>
      <input
        data-testid="share-btn"
        name="share-btn"
        type="image"
        onClick={ handleShare }
        src={ sharePicture }
        alt="share"
      />
      <input
        data-testid="favorite-btn"
        name="favorite-btn"
        type="image"
        onClick={ handleFavorite }
        src={ !isFavorited ? whiteHeartPicture : blackHeartPicture }
        alt="favorite"
      />
      { isCopied ? <p>Link copied!</p> : false}
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
              <p data-testid={ `${index}-recomendation-title` }>{ food.strMeal }</p>
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
