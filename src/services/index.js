// localStorage
export const getProgressFromLocal = () => JSON
  .parse(localStorage.getItem('inProgressRecipes'));
export const setProgressToLocal = (newProgress) => localStorage
  .setItem('inProgressRecipes', JSON.stringify(newProgress));

export const addProgressToLocal = (key, inProgressRecipe) => {
  if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
    localStorage.setItem('inProgressRecipes', JSON
      .stringify({ cocktails: {}, meals: {} }));
  }
  if (inProgressRecipe) {
    const { id, ingredients } = inProgressRecipe;
    const progressStored = getProgressFromLocal();
    const keyDataStored = progressStored[key];
    const newObjectKey = { ...keyDataStored, [id]: ingredients };
    setProgressToLocal({ ...progressStored, [key]: newObjectKey });
  }
};
