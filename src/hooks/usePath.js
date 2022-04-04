import { useLocation, useRouteMatch } from 'react-router-dom';

const usePath = () => {
  let routeFoods = false;
  const { params: { id } } = useRouteMatch();
  const { pathname } = useLocation();
  if (pathname.includes('/foods')) routeFoods = true;
  return { routeFoods, id };
};

export default usePath;
