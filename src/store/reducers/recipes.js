import { SAVE_SEARCH_BAR } from '../actions/index';

const INITIAL_STATE = {
  recipesFounded: '',
  endpointFoodInitial: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  endpointDrinkInitial: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  endpointFoodFilters: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  endpointDrinkFilters: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
};

const recipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_SEARCH_BAR:
    return {
      ...state,
      recipesFounded: action.payload,
    };
  default:
    return state;
  }
};

export default recipes;
