export const SAVE_FOODS_DRINKS = 'SAVE_FOODS_DRINKS';
export const SAVE_FILTERS = 'SAVE_FILTERS';
export const SAVE_RECIPE_STARTED = 'SAVE_RECIPE_STARTED';

export const saveFoodsAndDrinks = (key, data) => (
  { type: SAVE_FOODS_DRINKS, key, data }
);

export const saveFilters = (payload) => (
  { type: SAVE_FILTERS, payload }
);

export const recipeStarted = (payload) => (
  { type: SAVE_RECIPE_STARTED, payload }
);
