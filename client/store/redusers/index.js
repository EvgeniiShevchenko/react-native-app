import {combineReducers} from 'redux';
import homeReducer from './home/reduser';

const rootReducer = combineReducers({
  homeReduser: homeReducer,
});

export default rootReducer;
