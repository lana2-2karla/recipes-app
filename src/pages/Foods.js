import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import CardRecipes from '../components/CardRecipes';
import SearchHeader from '../components/SearchHeader';
import Footer from '../components/Footer';

const Foods = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({});
  const [endpoint, setEndpoint] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  const history = useHistory();
  const MAXIMUN = 12;
  const isVisible = true;

  useEffect(() => {
    const requestAPI = async () => {
      const response = await fetch(endpoint);
      const { meals } = await response.json();
      if (meals === null) {
        global.alert('Sorry, we haven`t found any recipes for these filters.');
        return false;
      }
      setData(meals);
    };
    requestAPI();
  }, []);

  const verifyType = (filtered) => {
    let type = '';
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
      const response = await fetch(endpoint);
      const { meals } = await response.json();
      if (meals === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.'); // fonte: https://stackoverflow.com/questions/6257619/how-get-an-apostrophe-in-a-string-in-javascript
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