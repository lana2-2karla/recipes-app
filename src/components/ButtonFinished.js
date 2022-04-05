import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import usePath from '../hooks/usePath';
import { doneRecipes } from '../services/checkLocalStorageInfo';

const ButtonFinished = () => {
  const { disableButton } = useSelector((state) => state.finish);
  const { currentRecipe } = useSelector((state) => state.progress);
  const { id } = usePath();
  const history = useHistory();

  const handleFinished = () => {
    doneRecipes({ id, done: currentRecipe, date: new Date() });
    history.push('/done-recipes');
  };

  return (
    <button
      data-testid="finish-recipe-btn"
      onClick={ handleFinished }
      disabled={ disableButton }
      type="button"
    >
      Finish Recipe
    </button>
  );
};

export default ButtonFinished;
