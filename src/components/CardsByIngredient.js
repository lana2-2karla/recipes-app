import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import usePath from '../hooks/usePath';
import requestServer from '../services/requests';
import { pushIngredientToMainPage } from '../store/actions';

const CardByIngredient = () => {
  const { routeFoods, linkPath } = usePath();
  const dispatch = useDispatch();
  const history = useHistory();
  const MAXIMUN = 12;
  const { endpointByIngredientsFoods,
    endpointByIngredientsDrinks } = useSelector((state) => state.recipes);
  const [cardsIngredient, setCardsIngredient] = useState([]);
  const verifyRoute = () => {
    if (routeFoods) return endpointByIngredientsFoods;
    if (!routeFoods) return endpointByIngredientsDrinks;
  };

  const handleTransitionToMP = (ingredientName) => {
    dispatch(pushIngredientToMainPage(`https://www.${linkPath}.com/api/json/v1/1/filter.php?i=${ingredientName}`));
    history.push(routeFoods ? '/foods' : '/drinks');
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
        <Card
          key={ Math.random() }
          value={ cardIng }
          data-testid={ `${index}-ingredient-card` }
          onClick={ () => handleTransitionToMP(cardIng) }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.${linkPath}.com/images/ingredients/${cardIng}-Small.png` }
            alt="Card Ingredient"
          />
          <h3 data-testid={ `${index}-card-name` }>{ cardIng }</h3>
        </Card>))}
    </div>);
};

export default CardByIngredient;
