import { useState } from 'react';

const useIngredientsList = (details) => {
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const list = [];
  const infoIngredients = Object.keys(details);
  const verifyExistIng = infoIngredients.some((item) => item.includes('strIng'));
  if (verifyExistIng) {
    infoIngredients.forEach((element, index) => {
      const newIngredient = Object.values(details)[index];
      if (element.includes('strIng')
        && newIngredient !== null && newIngredient.length) {
        setIngredients((previousIngred) => [...previousIngred, newIngredient]);
      }
      if (element.includes('strMeas')
        && newIngredient !== null && newIngredient.length) {
        setMeasure((previousMeasure) => [...previousMeasure, newIngredient]);
      }
    });
  }
  ingredients.forEach((item, index) => list.push(`${item} - ${measure[index]}`));
  return list;
};

export default useIngredientsList;
