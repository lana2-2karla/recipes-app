const verifyType = (id, pathname) => {
  let type = '';
  if (pathname.includes('/foods/')) type = 'themealdb';
  if (pathname.includes('/drinks/')) type = 'thecocktaildb';
  return `https://www.${type}.com/api/json/v1/1/lookup.php?i=${id}`;
};

export default verifyType;
