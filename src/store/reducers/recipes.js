import { SAVE_FILTERS, SAVE_FOODS_DRINKS } from '../actions/index';

const INITIAL_STATE = {
<<<<<<< HEAD
=======

>>>>>>> 864f1c60acfd3219a886f20a43c429023241f704
  recipesFounded: {
    foods: [],
    drinks: [],
  },
  filters: {
    foods: [],
    drinks: [],
  },
<<<<<<< HEAD
=======

  // recipesFounded: '',
>>>>>>> 864f1c60acfd3219a886f20a43c429023241f704
  endpointFoodInitial: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  endpointDrinkInitial: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  endpointFoodFilters: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  endpointDrinkFilters: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
};

const recipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_FOODS_DRINKS:
<<<<<<< HEAD
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
=======
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
>>>>>>> 864f1c60acfd3219a886f20a43c429023241f704
      filters: action.payload,
    };
  default:
    return state;
  }
};

export default recipes;
