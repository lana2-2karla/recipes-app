import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import usePath from '../hooks/usePath';
import requestServer from '../services/requests';

const CardByIngredient = () => {
  const { routeFoods } = usePath();
  const MAXIMUN = 12;
  const { endpointByIngredientsFoods,
    endpointByIngredientsDrinks } = useSelector((state) => state.recipes);
  const [cardsIngredient, setCardsIngredient] = useState([]);
  const verifyRoute = () => {
    if (routeFoods) return endpointByIngredientsFoods;
    if (!routeFoods) return endpointByIngredientsDrinks;
  };

  useEffect(() => {
    const requestAPI = async () => {
      const results = await requestServer(verifyRoute());
      const type = (results.meals ? results.meals : results.drinks);
      type.forEach((item) => {
        const infoIngredients = Object.keys(item);
        infoIngredients.forEach((element, index) => {
          const newIngredient = Object.values(item)[index];
          if (element.includes('strIngredient')
            && newIngredient !== null && newIngredient.length) {
            setCardsIngredient((previous) => ([...previous, newIngredient]));
          }
        });
      });
    };
    requestAPI();
  }, []);

  return (
    <div>
      { cardsIngredient.map((cardIng, index) => index < MAXIMUN && (
        <div
          key={ Math.random() }
          id={ index }
          data-testid={ `${index}-ingredient-card` }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.themealdb.com/images/ingredients/${cardIng}-Small.png` }
            alt="Card Ingredient"
          />
          <h3>{ cardIng }</h3>
        </div>))}
    </div>);
};

export default CardByIngredient;
