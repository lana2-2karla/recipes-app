import { SAVE_FILTERS, SAVE_FOODS_DRINKS,
  SAVE_INGREDIENT_CHOSED } from '../actions/index';

const INITIAL_STATE = {
  recipesFounded: {
    foods: [],
    drinks: [],
  },
  filters: {
    foods: [],
    drinks: [],
  },
  endpointFoodInitial: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  endpointDrinkInitial: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  endpointFoodFilters: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  endpointDrinkFilters: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  endpointByIngredientsFoods: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  endpointByIngredientsDrinks: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
  ingredient: '',
};

const recipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_FOODS_DRINKS:
    return {
      ...state,
      recipesFounded: {
        ...state.recipesFounded,
        [action.key]: action.data,
      },
    };
  case SAVE_FILTERS:
    return {
      ...state,
      filters: action.payload,
    };
  case SAVE_INGREDIENT_CHOSED:
    return {
      ...state,
      ingredient: action.payload,
    };
  default:
    return state;
  }
};

export default recipes;
