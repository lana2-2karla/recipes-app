import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const DrinksExplore = () => {
  const history = useHistory();

  async function handleClick() {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(URL);
    const randomDrink = await response.json();
    const randomDrinkId = randomDrink.drinks[0].idDrink;
    history.push(`/drinks/${randomDrinkId}`);
  }

  return (
    <div>
      <Header
        label="Explore Drinks"
      />
      <div>
        <button
          data-testid="explore-by-ingredient"
          type="button"
          name="explore-ingredient"
          value="btn-explore-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
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

export default DrinksExplore;
