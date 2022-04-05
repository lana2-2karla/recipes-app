import { useLocation, useRouteMatch } from 'react-router-dom';

const usePath = () => {
  let routeFoods = false;
  let linkPath = 'thecocktaildb';
  const { params: { id } } = useRouteMatch();
  const { pathname } = useLocation();
  if (pathname.includes('/foods')) {
    routeFoods = true;
    linkPath = 'themealdb';
  }
  return { routeFoods, id, linkPath };
};

export default usePath;
