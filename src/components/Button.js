import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { checkInProgressLocalStorage } from '../services/index';

const Button = () => {
  const { params: { id } } = useRouteMatch();
  const history = useHistory();
  const { location } = history;
  // const [inProgress, setInProgress] = useState(false);

  const inProgress = checkInProgressLocalStorage(id);
  console.log(inProgress, 'localStorage');
  const handleStarted = () => {
    if (location.pathname.includes('/foods')) {
      history.push(`/foods/${id}/in-progress`);
    }
    history.push(`/drinks/${id}/in-progress`);
  };

  return (
    <div>
      <button
        className="btn-fixed"
        data-testid="start-recipe-btn"
        type="button"
        onClick={ handleStarted }
      >
        { inProgress ? 'Continue Recipe' : 'Start Recipe' }
      </button>
    </div>
  );
};

export default Button;
