import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CardRecipes from '../components/CardRecipes';
import SearchHeader from '../components/SearchHeader';
import requestServer from '../services/requests';
import FiltersCategory from '../components/FiltersCategory';

const Foods = () => {
  const { endpointFoodInitial,
    endpointFoodFilters } = useSelector((state) => state.recipes);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({});
  const [filterCategory, setFilterCategory] = useState([]);
  const [endpoint, setEndpoint] = useState(endpointFoodInitial);
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  const history = useHistory();
  const MAXIMUN = 12;
  const MAXIMUN_FILTERS = 5;
  const isVisible = true;

  const verifyType = (filtered) => {
    let type = '';
    if (filtered.filterBy === 'category') type = 'filter.php?c';
    if (filtered.filterBy === 'ingredient') type = 'filter.php?i';
    if (filtered.filterBy === 'name') type = 'search.php?s';
    if (filtered.filterBy === 'firstLetter') type = 'search.php?f';

    return `https://www.themealdb.com/api/json/v1/1/${type}=${filtered.searchInput}`;
  };

  const handleDataResults = (filtered) => {
    setFilter(filtered);
    setEndpoint(verifyType(filtered));
  };

  const toggleSearch = () => {
    if (isVisibleSearch === true) { setIsVisibleSearch(false); }
    if (isVisibleSearch === false) { setIsVisibleSearch(true); }
  };

  useEffect(() => {
    const requestAPI = async () => {
      const { meals } = await requestServer(endpoint);
      const responseFilters = await requestServer(endpointFoodFilters);
      setFilterCategory(responseFilters.meals);
      if (meals === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
        return false;
      }
      if (meals.length === 1) {
        history.push(`/foods/${meals[0].idMeal}`);
      } else {
        setData(meals);
      }
    };
    requestAPI();
  }, [filter]);

  return (
    <div>
      <Header
        label="Foods"
        isVisible={ isVisible }
        toggleSearch={ toggleSearch }
      />
      { isVisibleSearch && (
        <SearchHeader
          handleDataResults={ handleDataResults }
        />
      )}
      <div>
        { filterCategory.map((filterName, index) => index < MAXIMUN_FILTERS && (
          <div key={ Math.random() } id={ index }>
            <FiltersCategory
              { ...filterName }
              handleDataResults={ handleDataResults }
            />
          </div>))}
      </div>
      <div>
        { data.map((infoRecipe, index) => index < MAXIMUN && (
          <div key={ Math.random() } id={ index }>
            <CardRecipes
              type="foods"
              { ...infoRecipe }
              index={ index }
            />
          </div>))}
      </div>
    </div>
  );
};

export default Foods;
