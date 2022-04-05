const verifyType = (id, routeFoods) => {
  let type = '';
  if (routeFoods) type = 'themealdb';
  if (!routeFoods) type = 'thecocktaildb';
  return `https://www.${type}.com/api/json/v1/1/lookup.php?i=${id}`;
};

export default verifyType;
