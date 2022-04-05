import { useLocation } from 'react-router-dom';

const useHeaderSearch = () => {
  let isVisibleSearchButton = false;
  const { pathname } = useLocation();
  if (pathname === '/foods/'
    || pathname === '/foods'
    || pathname === '/drinks'
    || pathname === '/drinks/'
    || pathname.includes('/nationalities')) isVisibleSearchButton = true;
  return { isVisibleSearchButton };
};

export default useHeaderSearch;
