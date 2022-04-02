import { combineReducers } from 'redux';
import recipes from './recipes';
import progress from './progress';
<<<<<<< HEAD
import finish from './finish';

const rootReducer = combineReducers({ recipes, progress, finish });
=======

const rootReducer = combineReducers({ recipes, progress });
>>>>>>> 864f1c60acfd3219a886f20a43c429023241f704

export default rootReducer;
