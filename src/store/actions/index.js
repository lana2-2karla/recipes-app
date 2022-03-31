export const SAVE_FOODS_DRINKS = 'SAVE_FOODS_DRINKS';
export const SAVE_FILTERS = 'SAVE_FILTERS';

export const saveFoodsAndDrinks = (payload) => (
  { type: SAVE_FOODS_DRINKS, payload }
);

export const saveFilters = (payload) => (
  { type: SAVE_FILTERS, payload }
);
