import React, { useEffect, useState } from 'react';
import CardRecipes from '../components/CardRecipes';
import Footer from '../components/Footer';
import Header from '../components/Header';
import requestServer from '../services/requests';

const NationalitiesExplored = () => {
  const [countries, setCountries] = useState([]);
  const [valuesFiltered, setValuesFiltered] = useState([]);
  const MAXIMUN = 12;

  useEffect(() => {
    const requestApi = async () => {
      const listCountriesURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const listMealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const { meals } = await requestServer(listCountriesURL);
      const listMeals = await requestServer(listMealsURL);
      setCountries(meals);
      setValuesFiltered(listMeals.meals);
    };
    requestApi();
  }, []);

  // Super ajuda de Álvaro Ramos - Turma XP - Tribo B
  const handleFilter = async ({ target }) => {
    const listMealsURL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${target.value}`;
    const listAllMealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    if (target.value === 'All') {
      const listAllMeals = await requestServer(listAllMealsURL);
      setValuesFiltered(listAllMeals.meals);
    } else {
      const listMeals = await requestServer(listMealsURL);
      setValuesFiltered(listMeals.meals);
    }
  };

  return (
    <div>
      <Header
        label="Explore Nationalities"
        isVisible={ isVisible }
      />
      <div>
        <label htmlFor="nationality-dropdown">
          <select
            data-testid="explore-by-nationality-dropdown"
            name="nationality-dropdown"
            onChange={ handleFilter }
          >
            <option
              value="All"
              data-testid="All-option"
            >
              All
            </option>
            { countries.map((countrie, index) => (
              <option
                key={ index }
                value={ countrie.strArea }
                data-testid={ `${countrie.strArea}-option` }
              >
                { countrie.strArea }
              </option>
            ))}
          </select>
        </label>
        <div>
          { valuesFiltered.map((infoMeals, index) => index < MAXIMUN && (
            <div key={ Math.random() } id={ index }>
              <CardRecipes
                type="foods"
                { ...infoMeals }
                index={ index }
              />
            </div>))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NationalitiesExplored;
