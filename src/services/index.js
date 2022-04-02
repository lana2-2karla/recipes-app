// localStorage
const getProgressFromLocal = () => JSON.parse(localStorage.getItem('inProgressRecipes'));
const setProgressToLocal = (newProgress) => localStorage
  .setItem('inProgressRecipes', JSON.stringify(newProgress));

const addProgressToLocal = (key, inProgressRecipe) => {
  if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({ cocktails: {}, meals: {} }));
  }
  if (inProgressRecipe) {
    const progressStored = getProgressFromLocal();
    const keyDataStored = progressStored[key];
    const newObjectKey = { ...keyDataStored, inProgressRecipe };
    setProgressToLocal({...progressStored, [key]: newObjectKey});
  }
};

export default addProgressToLocal;