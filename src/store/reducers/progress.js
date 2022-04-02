import { SAVE_RECIPE_FINISHED,
  SAVE_RECIPE_STARTED } from '../actions/index';

const INITIAL_STATE = { currentRecipe: [], finished: [], disableButton: false };

const progress = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_RECIPE_STARTED:
    return {
      ...state,
      currentRecipe: action.payload,
    };
  case SAVE_RECIPE_FINISHED:
    return {
      ...state,
      finished: [...state.finished, action.payload],
    };
  // case VERIFY_CHECK_ING:
  //   return {
  //     ...state,
  //     disableButton: action.payload,
  //   };
  default:
    return state;
  }
};

export default progress;
