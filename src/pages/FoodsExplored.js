import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FoodsExplored = () => {
  const isVisible = false;
  const history = useHistory();

  async function handleClick() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(URL);
    const randomFood = await response.json();
    const randomFoodId = randomFood.meals[0].idMeal;
    history.push(`/foods/${randomFoodId}`);
  }
  return (
    <div>
      <Header
        label="Explore Foods"
        isVisible={ isVisible }
      />
      <div>
        <button
          data-testid="explore-by-ingredient"
          type="button"
          name="explore-ingredient"
          value="btn-explore-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
        <button
          data-testid="explore-by-nationality"
          type="button"
          name="explore-nationality"
          value="btn-explore-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
        <button
          data-testid="explore-surprise"
          type="button"
          name="explore-surprise"
          value="btn-explore-surprise"
          onClick={ handleClick }
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default FoodsExplored;
