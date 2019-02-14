
import { combineReducers } from 'redux';
import { reduceAsyncActionStatusOf } from './asyncActionStatusReducer';
import { LOAD } from '../actions/loadingActions';

export default combineReducers({
  weatherState: reduceAsyncActionStatusOf(LOAD),
});
