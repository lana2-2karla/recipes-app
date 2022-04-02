import { addFavoriteToLocal, removeFavoriteFromLocal } from '.';

export const checkInfoInLocal = (id) => {
  const favorite = localStorage.getItem('favoriteRecipes');
  if (!favorite) {
    return false;
  }
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favorites) {
    const favoriteFound = favorites.some((favoriteRecipe) => favoriteRecipe.id === id);
    return favoriteFound;
  }
  return false;
};

export const toggleFavorite = (infoFavorite) => {
  const isFavorite = checkInfoInLocal();
  const { id, favorite } = infoFavorite;
  const objectFavorite = {
    id,
    type: (favorite.idMeal ? 'food' : 'drink'),
    nationality: (favorite.strArea ? favorite.strArea : ''),
    category: (favorite.strCategory ? favorite.strCategory : ''),
    alcoholicOrNot: (favorite.strAlcoholic ? favorite.strAlcoholic : ''),
    name: (favorite.idMeal ? favorite.strMeal : favorite.strDrink),
    image: (favorite.strMealThumb ? favorite.strMealThumb : favorite.strDrinkThumb),
  };
  if (!isFavorite) addFavoriteToLocal(objectFavorite);
  if (isFavorite) removeFavoriteFromLocal(id);
};
