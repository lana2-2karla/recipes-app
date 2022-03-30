import { SAVE_SEARCH_BAR } from '../actions/index';

const INITIAL_STATE = { recipesFounded: '' };

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
