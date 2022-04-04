import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CardRecipes from '../components/CardRecipes';
import SearchHeader from '../components/SearchHeader';
import requestServer from '../services/requests';
import FiltersCategory from '../components/FiltersCategory';
import Footer from '../components/Footer';

const Drinks = () => {
  const { endpointDrinkInitial,
    endpointDrinkFilters } = useSelector((state) => state.recipes);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({});
  const [filterCategory, setFilterCategory] = useState([]);
  const [endpoint, setEndpoint] = useState(endpointDrinkInitial);
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  const [restaure, setRestaure] = useState(false);
  const history = useHistory();
  const MAXIMUN = 12;
  const MAXIMUN_FILTERS = 5;
  const isVisible = true;

  const verifyType = (filtered) => {
    let type = '';
    if (filtered.filterBy === 'category') {
      type = 'filter.php?c';
      setRestaure(true);
    }
    if (filtered.filterBy === 'ingredient') type = 'filter.php?i';
    if (filtered.filterBy === 'name') type = 'search.php?s';
    if (filtered.filterBy === 'firstLetter') type = 'search.php?f';

    return `https://www.thecocktaildb.com/api/json/v1/1/${type}=${filtered.searchInput}`;
  };

  const handleDataResults = (filtered) => {
    if (filtered.searchInput === 'all' || (filtered.filterBy === 'category'
      && restaure && filtered.searchInput === filter.searchInput)) {
      setRestaure(false);
      setEndpoint(endpointDrinkInitial);
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
      const results = await requestServer(endpoint);
      const responseFilters = await requestServer(endpointDrinkFilters);
      setFilterCategory(responseFilters.drinks);
      if (results.drinks === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.'); // fonte: https://stackoverflow.com/questions/6257619/how-get-an-apostrophe-in-a-string-in-javascript
        return false;
      }
      if (results.drinks.length === 1) {
        history.push(`/drinks/${results.drinks[0].idDrink}`);
      } else {
        setData(results.drinks);
      }
    };
    requestAPI();
  }, [filter, restaure]);

  return (
    <div>
      <Header
        label="Drinks"
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
              filter={ filter }
            />
          </div>))}
      </div>
      <div>
        { data.map((infoRecipe, index) => index < MAXIMUN && (
          <div key={ Math.random() } id={ index }>
            <CardRecipes
              { ...infoRecipe }
              index={ index }
            />
          </div>))}
      </div>
      <Footer />
    </div>
  );
};

export default Drinks;
