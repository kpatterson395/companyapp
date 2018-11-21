import { combineReducers } from 'redux';
import accounts from './accounts';
import employees from './employees';
import projects from './projects';

const rootReducer = combineReducers({accounts, employees, projects});

export default rootReducer;