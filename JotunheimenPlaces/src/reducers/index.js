import demographics from './demographics';
import survey from './survey';
import {combineReducers} from 'redux';

export default combineReducers({
  demographics,
  survey
});
