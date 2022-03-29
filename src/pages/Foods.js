import React, { useEffect, useState } from 'react';
import SearchHeader from '../components/SearchHeader';

const Foods = () => {
  const [, setData] = useState([]);
  const [filter, setFilter] = useState({});
  const [endpoint, setEndpoint] = useState('');

  const verifyType = (filtered) => {
    let type = '';
    console.log(filtered.filterBy);
    if (filtered.filterBy === 'ingredient') type = 'filter.php?i';
    if (filtered.filterBy === 'name') type = 'search.php?s';
    if (filtered.filterBy === 'firstLetter') type = 'search.php?f';

    return `https://www.themealdb.com/api/json/v1/1/${type}=${filtered.searchInput}`;
  };

  const handleDataResults = (filtered) => {
    setFilter(filtered);
    setEndpoint(verifyType(filtered));
  };

  useEffect(() => {
    const requestAPI = async () => {
      const response = await fetch(endpoint);
      const results = await response.json();
      setData(results.meals);
    };
    requestAPI();
  }, [filter]);

  return (
    <div>
      <h1>Foods</h1>
      <SearchHeader
        handleDataResults={ handleDataResults }
      />
    </div>
  );
};

export default Foods;
