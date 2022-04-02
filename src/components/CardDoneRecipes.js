import React from 'react';
// import clipboardCopy from 'clipboard-copy';
import PropTypes, { number, string } from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
// import { useSelector } from 'react-redux';

const CardDoneRecipes = (infoRecipes) => {
  // const emailUser = JSON.parse(localStorage.getItem('user'));
  // const history = useHistory();

  // const [localStorage, setLocalStorage] = useLocalStorage('doneRecipes', []);
  // const [doneRecipes, setDoneRecipes] = useState([]);
  // const [copied, setCopied] = useState('');

  // const doneRecipeStorage = JSON.parse(localStorage.getItem('doneRecipes'));

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href) // Source: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp;
      .then(global.alert('Link copied!'));
  };

  const { index, type } = infoRecipes;
  let page;
  let name;
  let img;
  if (type === 'foods') {
    const { idMeal, strMeal, strMealThumb } = infoRecipes;
    page = `/foods/${idMeal}`;
    name = strMeal;
    img = strMealThumb;
  }

  if (type === 'drinks') {
    const { idDrink, strDrink, strDrinkThumb } = infoRecipes;
    page = `/drinks/${idDrink}`;
    name = strDrink;
    img = strDrinkThumb;
  }
  return (
    /* { doneRecipeStorage.map((recipe, index) => ( */
    <div>
      <Link
        data-testid={ `${index}-recipe-card` }
        to={ page }
      >
        <img
          src={ recipe.image }
          alt="done recipe image"
          data-testid={ `${index}-horizontal-image` }
        />

        <p
          data-testid={ `${index}-horizontal-name` }
        >
          {recipe.name}
        </p>
      </Link>

      <h2
        data-testid={ `${index}-horizontal-top-text` }
      >
        {recipe.category}
      </h2>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        {recipe.doneDate}

      </p>

      {recipe.type === 'food' ? (recipe.tags.map((tagName) => (
        <p
          data-testid={ `${index}-${recipe.tags}-horizontal-tag` }
        >
          {tagName}
        </p>
      ))) : ''}
      {' '}
      */

      <input
        data-testid={ `${index}-horizontal-share-btn` }
        type="image"
        alt="share button"
        src={ shareIcon }
        onClick={ handleClick }
      />

    </div>
    /*  ))}; */

  );
  CardDoneRecipes.propTypes = {
    infoRecipes: PropTypes.shape({
      index: number.isRequired,
      idMeal: number.isRequired,
      strMeal: string.isRequired,
      strMealThumb: string.isRequired,
    }).isRequired,
  };
};

export default CardDoneRecipes;
