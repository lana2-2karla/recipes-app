import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Ingredients = (infoRecipe) => {
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [checked, setChecked] = useState([]);
  const [disableButton, setDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const newDataIng = [];
    const newMeasure = [];
    const infoIngredients = Object.keys(infoRecipe);
    const verifyExistIng = infoIngredients.some((item) => item.includes('strIng'));
    if (verifyExistIng) {
      infoIngredients.forEach((element, index) => {
        const newIngredient = Object.values(infoRecipe)[index];
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
    const newChecked = newDataIng.slice();
    setChecked(newChecked.fill(false));
  }, [infoRecipe]);

  const handleValidationFinish = (newChecked) => {
    const isAllChecked = newChecked.every((element) => element === true);
    setDisabled(!isAllChecked);
  };

  const handleCheckbox = (index) => {
    const newChecked = checked
      .map((element, indexCheck) => (indexCheck === index ? !element : element));
    setChecked(newChecked);
    handleValidationFinish(newChecked);
  };

  const handleFinished = () => {
    history.push('/done-recipes');
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
      <button
        data-testid="finish-recipe-btn"
        onClick={ handleFinished }
        disabled={ disableButton }
        type="button"
      >
        Finish Recipe
      </button>
    </div>
  );
};
export default Ingredients;
