import { combineReducers } from 'redux';
import recipes from './recipes';
import progress from './progress';

const rootReducer = combineReducers({ recipes, progress });

export default rootReducer;
