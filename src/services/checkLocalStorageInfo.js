import { addDoneToLocal,
  addFavoriteToLocal,
  removeFavoriteFromLocal } from './localStorage';

const getFavorites = () => JSON.parse(localStorage.getItem('favoriteRecipes'));

export const checkInfoInLocal = (id) => {
  console.log('entrou');
  const favorite = localStorage.getItem('favoriteRecipes');
  if (!favorite) {
    return false;
  }
  const favorites = getFavorites();
  if (favorites) {
    const favoriteFound = favorites.some((favoriteRecipe) => favoriteRecipe.id === id);
    return favoriteFound;
  }
  return false;
};

export const toggleFavorite = (infoFavorite) => {
  const { id, favorite } = infoFavorite;
  console.log('entrou');
  const isFavorite = checkInfoInLocal(id);
  const objectFavorite = {
    id,
    type: (favorite.idMeal ? 'food' : 'drink'),
    nationality: (favorite.strArea ? favorite.strArea : ''),
    category: (favorite.strCategory ? favorite.strCategory : ''),
    alcoholicOrNot: (favorite.strAlcoholic ? favorite.strAlcoholic : ''),
    name: (favorite.idMeal ? favorite.strMeal : favorite.strDrink),
    image: (favorite.strMealThumb ? favorite.strMealThumb : favorite.strDrinkThumb),
  };
  if (isFavorite) removeFavoriteFromLocal(id);
  if (!isFavorite) addFavoriteToLocal(objectFavorite);
};

const getDones = () => JSON.parse(localStorage.getItem('doneRecipes'));

export const checkDoneInLocalStorage = (id) => {
  // const done = localStorage.getItem('doneRecipes');
  const dones = getDones();
  // console.log(dones, 'dones');
  if (!dones) {
    return false;
  }
  if (dones) {
    const doneFound = dones.some((doneRecipe) => doneRecipe.id === id);
    console.log(doneFound);
    return doneFound;
  }
  return false;
};

export const doneRecipes = (infoDone) => {
  const { id, done, date } = infoDone;
  const isDone = checkDoneInLocalStorage(id);
  const objectDone = {
    id,
    type: (done.idMeal ? 'food' : 'drink'),
    nationality: (done.strArea ? done.strArea : ''),
    category: (done.strCategory ? done.strCategory : ''),
    alcoholicOrNot: (done.strAlcoholic ? done.strAlcoholic : ''),
    name: (done.idMeal ? done.strMeal : done.strDrink),
    image: (done.strMealThumb ? done.strMealThumb : done.strDrinkThumb),
    doneDate: date,
    tags: (done.strTags ? done.strTags : []),
  };
  if (!isDone) addDoneToLocal(objectDone);
};
