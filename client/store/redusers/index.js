import {combineReducers} from 'redux';
import homeReduser from './home/reduser';

const rootReduser = combineReducers({
  homeReduser,
});

export default rootReduser;
