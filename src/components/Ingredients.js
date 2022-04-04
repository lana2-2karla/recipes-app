import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePath from '../hooks/usePath';
import { addProgressToLocal, getProgressFromLocal } from '../services/localStorage';
import { validationFinishButton } from '../store/actions';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [checked, setChecked] = useState([]);
  const dispatch = useDispatch();
  const { routeFoods, id } = usePath();
  const { currentRecipe } = useSelector((state) => state.progress);

  const verifyIDLocalStorage = (newDataIng) => {
    let newChecked = newDataIng.slice();
    let key = '';
    if (routeFoods) key = 'meals';
    if (!routeFoods) key = 'cocktails';

    const progress = localStorage.getItem('inProgressRecipes');
    if (!progress) {
      setChecked(newChecked.fill(false));
      return false;
    }
    const results = getProgressFromLocal()[key];
    if (!results || !results[id]) {
      setChecked(newChecked.fill(false));
      return false;
    }
    const stepsCheckedBefore = results[id];
    newChecked = newChecked.map((_item, index) => {
      let isCheck = false;
      stepsCheckedBefore.forEach((itemCheck) => {
        if (itemCheck === index) isCheck = true;
      });
      return isCheck;
    });
    setChecked(newChecked);
  };

  useEffect(() => {
    const newDataIng = [];
    const newMeasure = [];
    const infoIngredients = Object.keys(currentRecipe);
    const verifyExistIng = infoIngredients.some((item) => item.includes('strIng'));
    if (verifyExistIng) {
      infoIngredients.forEach((element, index) => {
        const newIngredient = Object.values(currentRecipe)[index];
        if (element.includes('strIng')
          && newIngredient !== null && newIngredient.length) {
          newDataIng.push(newIngredient);
        }
        if (element.includes('strMeas')
          && newIngredient !== null && newIngredient.length) {
          newMeasure.push(newIngredient);
        }
      });
    }
    setIngredients(newDataIng);
    setMeasure(newMeasure);
    verifyIDLocalStorage(newDataIng);
  }, [currentRecipe]);

  const handleValidationFinish = (newChecked) => {
    const isAllChecked = newChecked.every((element) => element === true);
    dispatch(validationFinishButton(!isAllChecked));
  };

  const handleLocalStorageUpdate = (newChecked) => {
    let key = '';
    if (routeFoods) key = 'meals';
    if (!routeFoods) key = 'cocktails';
    const allCheckedStep = newChecked.map((item, index) => (item && index))
      .filter((item) => item !== false);
    addProgressToLocal(key, { id, ingredients: allCheckedStep });
  };

  const handleCheckbox = (index) => {
    const newChecked = checked
      .map((element, indexCheck) => (indexCheck === index ? !element : element));
    setChecked(newChecked);
    handleValidationFinish(newChecked);
    handleLocalStorageUpdate(newChecked);
  };

  return (
    <div>
      { ingredients.map((item, index) => (
        <div key={ index } data-testid={ `${index}-ingredient-step` }>
          <input
            id={ item }
            type="checkbox"
            onChange={ () => handleCheckbox(index) }
            checked={ checked[index] }
            value={ checked[index] }
          />
          <label
            htmlFor={ item }
            style={ checked[index] ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' } }
          >
            {`${item} - ${measure[index]}`}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Ingredients;
