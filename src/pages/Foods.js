import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CardRecipes from '../components/CardRecipes';
import SearchHeader from '../components/SearchHeader';
<<<<<<< HEAD
import requestServer from '../services/requests';
import FiltersCategory from '../components/FiltersCategory';
=======
import Footer from '../components/Footer';
>>>>>>> 2e8ee3df68f44d78176497887b648b998a18ea92

const Foods = () => {
  const { endpointFoodInitial,
    endpointFoodFilters } = useSelector((state) => state.recipes);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({});
  const [filterCategory, setFilterCategory] = useState([]);
  const [endpoint, setEndpoint] = useState(endpointFoodInitial);
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  const [restaure, setRestaure] = useState(false);
  const history = useHistory();
  const MAXIMUN = 12;
  const MAXIMUN_FILTERS = 5;
  const isVisible = true;

  const verifyType = (filtered) => {
    let type = '';
    if (filtered.filterBy === 'category') {
      setRestaure(true);
      type = 'filter.php?c';
    }
    if (filtered.filterBy === 'ingredient') type = 'filter.php?i';
    if (filtered.filterBy === 'name') type = 'search.php?s';
    if (filtered.filterBy === 'firstLetter') type = 'search.php?f';

    return `https://www.themealdb.com/api/json/v1/1/${type}=${filtered.searchInput}`;
  };

  const handleDataResults = (filtered) => {
    if (filtered.searchInput === 'all' || (filtered.filterBy === 'category'
      && restaure && filtered.searchInput === filter.searchInput)) {
      setRestaure(false);
      setEndpoint(endpointFoodInitial);
      return false;
    }
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
      if (meals.length === 1 && filter.filterBy !== 'category') {
        history.push(`/foods/${meals[0].idMeal}`);
      } else {
        setData(meals);
      }
    };
    requestAPI();
  }, [filter, restaure]);

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
        <button
          data-testid="All-category-filter"
          onClick={ () => handleDataResults({ searchInput: 'all',
            filterBy: 'category' }) }
          type="button"
        >
          All
        </button>
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
      <Footer />
    </div>
  );
};

export default Foods;
