import { combineReducers } from 'redux';
import recipes from './recipes';
import progress from './progress';
import finish from './finish';

const rootReducer = combineReducers({ recipes, progress, finish });

export default rootReducer;
