// localStorage Progress
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

export const checkInProgressLocalStorage = (id) => {
  // const inProgress = localStorage.getItem('inProgressRecipes');
  const progresses = getProgressFromLocal();
  console.log(progresses);
  if (!progresses) {
    return false;
  }
  const { meals = [], cocktails = [] } = progresses;
  if (meals[id] || cocktails[id]) {
    console.log('entrou');
    return true;
  }
  return false;
};

// OUTPUT : { cocktails: {id1: [0, 4, 3], id2: [2, 3, 5]}, meals: {} }
// localStorage Finished
export const getDoneFromLocal = () => JSON
  .parse(localStorage.getItem('doneRecipes'));
export const setDoneToLocal = (newDone) => localStorage
  .setItem('doneRecipes', JSON.stringify(newDone));

export const addDoneToLocal = (doneRecipe) => {
  console.log(doneRecipe);
  if (!JSON.parse(localStorage.getItem('doneRecipes'))) {
    localStorage.setItem('doneRecipes', JSON
      .stringify([]));
  }
  if (doneRecipe) {
    const doneStored = getDoneFromLocal();
    setDoneToLocal([...doneStored, doneRecipe]);
  }
};
// OUTPUT : [{ id: id-da-receita,
//     type: comida-ou-bebida,
//     nationality: nacionalidade-da-receita-ou-texto-vazio,
//     category: categoria-da-receita-ou-texto-vazio,
//     alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//     name: nome-da-receita,
//     image: imagem-da-receita,
//     doneDate: quando-a-receita-foi-concluida,
//     tags: array-de-tags-da-receita-ou-array-vazio
// }, {}]
// localStorage Favorites
export const getFavoritesFromLocal = () => JSON
  .parse(localStorage.getItem('favoriteRecipes'));
export const sendFavoriteToLocal = (newFavorite) => localStorage
  .setItem('favoriteRecipes', JSON.stringify(newFavorite));

export const addFavoriteToLocal = (favoriteRecipe) => {
  if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
    localStorage.setItem('favoriteRecipes', JSON
      .stringify([]));
  }
  if (favoriteRecipe) {
    const favoriteStored = getFavoritesFromLocal();
    sendFavoriteToLocal([...favoriteStored, favoriteRecipe]);
  }
};

export const removeFavoriteFromLocal = (id) => {
  if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
    localStorage.setItem('favoriteRecipes', JSON
      .stringify([]));
  }
  if (id) {
    const favoriteStored = getFavoritesFromLocal();
    const favoritesRemovedEx = favoriteStored
      .filter((favoriteRecipe) => favoriteRecipe.id !== id);
    sendFavoriteToLocal(favoritesRemovedEx);
  }
};
// Output : [{
//     id: id-da-receita,
//     type: food-ou-drink,
//     nationality: nacionalidade-da-receita-ou-texto-vazio,
//     category: categoria-da-receita-ou-texto-vazio,
//     alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//     name: nome-da-receita,
//     image: imagem-da-receita
// }]
