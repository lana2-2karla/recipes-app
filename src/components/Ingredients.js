import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Ingredients = () => {
  const { currentRecipe } = useSelector((state) => state.progress);
  const [ingredients, setIngredients] = useState([]);
  const { location: { pathname } } = useHistory();

  useEffect(() => {
    if (currentRecipe) {
      const arrValues = Object.values(currentRecipe);
      const twenty = 20;
      const nine = 9;
      const twentyNine = 29;
      for (let index = nine; index < twentyNine; index += 1) {
        if (arrValues[index].length) {
          const item = `${arrValues[index]} - ${arrValues[index + twenty]}`;
          setIngredients((previous) => [...previous, item]);
        }
      }
    }
    console.log(ingredients);
  }, [setIngredients]);

  return (
    <div>
      { pathname.includes('/in-progress')
        ? (
          <div>
            { ingredients.map((item, index) => (
              <div key={ index }>
                <label htmlFor={ item }>
                  { item }
                </label>
              </div>
            ))}
          </div>)
        : (
          <ul>
            { ingredients.map((item, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { item }
              </li>
            ))}
          </ul>)}
    </div>
  );
};
export default Ingredients;
