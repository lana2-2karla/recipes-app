import { SAVE_RECIPE_STARTED } from '../actions/index';

const INITIAL_STATE = { currentRecipe: { meals: [], drinks: [] } };

const progress = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_RECIPE_STARTED:
    return {
      ...state,
      currentRecipe: action.payload,
    };
  default:
    return state;
  }
};

export default progress;
